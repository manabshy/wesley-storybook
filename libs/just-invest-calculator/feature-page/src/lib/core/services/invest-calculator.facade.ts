import { tap, catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { BudgetCalculatorApiService } from '@wesleyan-frontend/just-invest-calculator/data-access';

@Injectable({
  providedIn: 'root',
})
export class BudgetCalculatorFacade {
  constructor(private budgetCalculatorApiService: BudgetCalculatorApiService) {}

  submitBudgetCalculator(
    balanceAmount: number,
    contributionAmount: number,
    frequency: string,
    riskCode: string,
    term: number
  ) {
    return this.budgetCalculatorApiService
      .submitBudgetCalculator({
        balanceAmount,
        contributionAmount,
        frequency,
        riskCode,
        term,
      })
      .pipe(
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
