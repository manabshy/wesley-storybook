export interface KnowledgeCheckAnswerDTO {
  attemptId: number;
  questionIndex: number;
  answer: string;
}

export interface KnowledgeCheckResponse {
  data: {
    attemptId: number;
    error?: boolean;
  };
}
