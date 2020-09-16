import { AppPo } from '../support/app.po';

describe('AppComponent', () => {
  const app = new AppPo();

  beforeEach(() => app.navigateTo());

  it('should render title', () => {
    cy.get('.content span')
      .first()
      .invoke('text')
      .should((text) => expect(text).to.equal('billy app is running!'));
  });
});
