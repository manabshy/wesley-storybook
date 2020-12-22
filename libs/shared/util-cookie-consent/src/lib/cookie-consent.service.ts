import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, merge, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

interface ConsentUpdateEvent extends CustomEvent {
  detail: { cookieName: string };
}

const PERFORMANCE_CONSENT_COOKIE = 'WesleyanPerformanceOptIn';
const FUNCTIONAL_CONSENT_COOKIE = 'WesleyanFunctionalOptIn';

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private performanceConsentGiven$$ = new BehaviorSubject(false);
  private functionalConsentGiven$$ = new BehaviorSubject(false);

  /**
   * A custom event needs added to Cassie Cookie Manager
   * that should fire when consent is given or not
   * containing the name of cookie being updated
   *
   * i.e
   * document.dispatchEvent(
   *    new CustomEvent("consent-update", {detail:{
   *         cookieName:'WesleyanPerformanceOptIn'
   * }}))
   * */
  private consentUpdateEvent$ = fromEvent<ConsentUpdateEvent>(
    document,
    'consent-update'
  );

  performanceConsentGiven$ = this.performanceConsentGiven$$.asObservable();
  functionalConsentGiven$ = this.functionalConsentGiven$$.asObservable();

  constructor(private cookieService: CookieService) {
    this.checkConsentGiven(
      PERFORMANCE_CONSENT_COOKIE,
      this.performanceConsentGiven$$
    );
    this.checkConsentGiven(
      FUNCTIONAL_CONSENT_COOKIE,
      this.functionalConsentGiven$$
    );
  }

  private checkConsentGiven(cookieName: string, bs: BehaviorSubject<boolean>) {
    merge(
      //Consent already given previously, cookie should be present
      of(this.cookieService.get(cookieName) === 'yes'),
      //Consent modal present on the app, waiting for user consent
      this.consentUpdateEvent$.pipe(
        filter((e) => e.detail.cookieName === cookieName),
        map((v) => this.cookieService.get(cookieName) === 'yes')
      )
    )
      .pipe(
        //If consent already given before the app loads
        //two true values will fire, we need only one
        distinctUntilChanged(),
        tap((v) => bs.next(v))
      )
      .subscribe();
  }
}
