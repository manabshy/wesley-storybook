export interface KnowledgeCheckAnswerDTO {
  attemptId: number;
  questionIndex: number;
  questionText: string;
  answerText: string;
  answerValue: 'Yes' | 'No';
}

export interface KnowledgeCheckResponse {
  data: {
    attemptId: number;
    error?: boolean;
  };
}
