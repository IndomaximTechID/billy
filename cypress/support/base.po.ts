export abstract class BasePo {
  abstract pageUrl: string;

  navigateTo(): void {
    cy.visit(this.pageUrl);
  }
}
