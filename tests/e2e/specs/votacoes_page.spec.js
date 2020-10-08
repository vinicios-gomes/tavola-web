describe('The Votacoes Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080/votacoes');
    cy.get('h1').should('contain', 'Votações');
    cy.get('#cardvot a').should('have.attr', 'href');
  });
});
