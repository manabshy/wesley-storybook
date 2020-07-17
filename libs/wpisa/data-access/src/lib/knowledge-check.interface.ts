export interface KnowledgeCheckAnswerDTO {
  attemptId: number;
  questionIndex: number;
  questionText: string;
  answerText: string;
}

export interface KnowledgeCheckResponse {
  data: {
    attemptId: number;
    error?: boolean;
  };
}
