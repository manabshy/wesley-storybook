export interface Config {
  pageTitle: string;
  progressBar: {
    steps: string[];
  };
  start: {
    pageTitle: string;
    heading: string;
    summary: string;
    nextButtonLabel: string;
  };
  knowledgeCheck: KnowledgeCheck;
}

export interface KnowledgeCheck {
  step1: KnowledgeCheckStep;
  step2: KnowledgeCheckStep;
}

export interface KnowledgeCheckStep {
  heading: string;
  summary: string;
  questions: string[];
  nextButtonLabel: string;
  backButtonLabel: string;
}
