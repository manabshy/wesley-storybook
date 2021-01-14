import { wesStepper } from '../support/app.po';
describe('shared-ui-stepper', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=steppercomponent--with-background&viewMode=story');
    // cy.visit('/iframe.html?id=steppercomponent--primary&knob-steps&knob-currentStepIndex=3&knob-currentStepProgressPercentage=100')
  });

  it('should render the component', () => {
    wesStepper().should('exist');
  });
});
