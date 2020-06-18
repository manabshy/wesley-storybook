export interface KnowledgeCheckAnswerDTO {
  attemptId: string;
  questionIndex: number;
  answer: string;
}

export interface KnowledgeCheckResponse {
  data: {
    attemptId: string;
    error?: boolean;
  };
}
