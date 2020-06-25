describe('shared-ui-stepper', () => {
  beforeEach(() => cy.visit('/iframe.html?id=steppercomponent--primary&knob-steps&knob-currentStepIndex=3&knob-currentStepProgressPercentage=100'));

  it('should render the component', () => {
    cy.get('wes-stepper').should('exist');
  });
});
