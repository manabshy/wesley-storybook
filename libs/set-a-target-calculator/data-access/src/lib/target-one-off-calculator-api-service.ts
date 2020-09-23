import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TargetOneOffCalculatorResponse } from './target-one-off-calculator.interface';
import { TargetCalculatorDTO } from './target-shared-calculator.interface';
@Injectable({
  providedIn: 'root',
})
export class TargetOneOffCalculatorApiService {
  constructor(private http: HttpClient) {}

  submitTargetOneOffCalculator(
    calculator: TargetCalculatorDTO
  ): Observable<TargetOneOffCalculatorResponse> {
    return this.http.post<TargetOneOffCalculatorResponse>(
      `/api/webapiwrapper/targetoneoff`,
      calculator
    );
  }
}
