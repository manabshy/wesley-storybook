import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  BudgetCalculatorDTO,
  BudgetCalculatorResponse,
} from './budget-calculator.interface';

@Injectable({
  providedIn: 'root',
})
export class BudgetCalculatorApiService {
  constructor(private http: HttpClient) {}

  submitBudgetCalculator(
    calculator: BudgetCalculatorDTO
  ): Observable<BudgetCalculatorResponse> {
    return this.http.post<BudgetCalculatorResponse>(
      `/api/webapiwrapper/budgetbased`,
      calculator
    );
  }
}
