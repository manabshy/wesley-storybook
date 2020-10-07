import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { TargetRegularCalculatorApiService } from '@wesleyan-frontend/set-a-target-calculator/data-access';

@Injectable({
  providedIn: 'root',
})
export class TargetRegularCalculatorFacade {
  constructor(
    private targetRegularCalculatorApiService: TargetRegularCalculatorApiService
  ) {}

  submitTargetRegularCalculator(
    balanceAmount: number,
    contributionAmount: number,
    targetAmount: number,
    frequency: string,
    riskCode: string,
    term: number
  ) {
    return this.targetRegularCalculatorApiService
      .submitTargetRegularCalculator({
        balanceAmount,
        contributionAmount,
        targetAmount,
        frequency,
        riskCode,
        term,
      })
      .pipe(
        tap((response) => response.contributions),
        catchError((err) => {
          this.handleHttpError(err);
          return throwError(err);
        })
      );
  }
  private handleHttpError(err: HttpErrorResponse) {
    if (err.status === 400) {
      //window.open(`/${isaRoutesNames.KNOWLEDGE_CHECK_ERROR}`, '_self');
    }
  }
}
