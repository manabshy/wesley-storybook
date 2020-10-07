import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TargetRegularCalculatorResponse } from './target-regular-calculator.interface';
import { TargetCalculatorDTO } from './target-shared-calculator.interface';

@Injectable({
  providedIn: 'root',
})
export class TargetRegularCalculatorApiService {
  constructor(private http: HttpClient) {}

  submitTargetRegularCalculator(
    calculator: TargetCalculatorDTO
  ): Observable<TargetRegularCalculatorResponse> {
    return this.http.post<TargetRegularCalculatorResponse>(
      `/api/webapiwrapper/targetregular`,
      calculator
    );
  }
}
