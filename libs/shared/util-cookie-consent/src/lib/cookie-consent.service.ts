import { BehaviorSubject, fromEvent, merge, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

interface ConsentUpdateEvent extends CustomEvent {
  detail: { cookieName: string };
}

const PERFORMANCE_CONSENT_COOKIE = 'WesleyanPerformanceOptIn';

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private performanceConsentGiven$$ = new BehaviorSubject(false);

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

  constructor(private cookieService: CookieService) {
    this.checkAnalyticalConsentGiven();
  }

  private checkAnalyticalConsentGiven() {
    merge(
      //Consent already given previously, cookie should be present
      of(this.cookieService.get(PERFORMANCE_CONSENT_COOKIE) === 'yes'),
      //Consent modal present on the app, waiting for user consent
      this.consentUpdateEvent$.pipe(
        filter((e) => e.detail.cookieName === PERFORMANCE_CONSENT_COOKIE),
        map((v) => this.cookieService.get(PERFORMANCE_CONSENT_COOKIE) === 'yes')
      )
    )
      .pipe(tap((v) => this.performanceConsentGiven$$.next(v)))
      .subscribe();
  }
}
