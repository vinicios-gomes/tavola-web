describe('Visit', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080/');
    cy.viewport(1200, 720);
    cy.get('div#menu p').should('contain', 'Resultados');
    cy.get('div#menu a').should('have.attr', 'href', 'https://meet.jit.si/20200919admin');
    cy.get('div#menu a').should('have.attr', 'target', '_blank');

    cy.get('div#menu p').should('contain', 'Votações');
  });
});
