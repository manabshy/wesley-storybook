import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';
import { mapTo, scan, map, distinctUntilChanged } from 'rxjs/operators';

import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayProgressSpinnerService {
  private spinnerTopRef: OverlayRef;

  private spin$: Subject<number> = new Subject();

  constructor(private overlay: Overlay, private liveAnnouncer: LiveAnnouncer) {
    this.spinnerTopRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    this.spin$
      .asObservable()
      .pipe(
        scan((acc, next) => {
          if (!next) return 0;
          return acc + next >= 0 ? acc + next : 0;
        }, 0),
        map((val) => val > 0),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        if (res) {
          this.spinnerTopRef.attach(
            new ComponentPortal(ProgressSpinnerComponent)
          );
        } else if (this.spinnerTopRef.hasAttached()) {
          this.spinnerTopRef.detach();
        }
      });
  }
  show() {
    // console.log('show');
    this.spin$.next(1);
    this.liveAnnouncer.announce('Loading, please wait');
  }
  hide() {
    // console.log('hide');
    this.spin$.next(-1);
    this.liveAnnouncer.clear();
  }
  reset() {
    // console.log('reset');
    this.spin$.next(0);
  }
}
