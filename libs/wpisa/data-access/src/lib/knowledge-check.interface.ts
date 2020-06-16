export interface KnowledgeCheckAnswerDTO {
  attemptId?: string;
  questionIndex: number;
  questionText: string;
  answer: string;
}

export interface KnowledgeCheckResponse {
  data: {
    attemptId: string;
    error?: boolean;
  };
}
