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
