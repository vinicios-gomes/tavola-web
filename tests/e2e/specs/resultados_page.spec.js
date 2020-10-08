describe('The Resultados Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080/resultados');
    cy.viewport(1200, 720);
    cy.get('h1').should('contain', 'Resultados');
    cy.get('h2').should('contain', 'Abstenho - me');
    cy.get('h2').should('contain', 'Aprovar a chapa');
    cy.get('h2').should('contain', 'Aptos a votar');
    cy.get('h2').should('contain', 'Total de votos');
  });
});
