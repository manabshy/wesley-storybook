import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface KnowledgeCheckAnswerDTO {
  attemptId?: string;
  questionIndex: number;
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
    return of({ attemptId: 'test' });
    return this.http.post<KnowledgeCheckResponse>(
      `/api/isaKnowledgeCheck/`,
      answer
    );
  }
}
