import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface KnowledgeCheckAnswerDTO {
  attemptId?: string;
  questionIndex: number;
  questionText: string;
  answer: string;
}

export interface KnowledgeCheckResponse {
  attemptId: string;
  error?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCheckService {
  constructor(private http: HttpClient) {}

  submitAnswer(
    answer: KnowledgeCheckAnswerDTO
  ): Observable<KnowledgeCheckResponse> {
    return this.http.post<KnowledgeCheckResponse>(
      `/api/isawebapiwrapper/knowledgecheck`,
      answer,
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }
}
