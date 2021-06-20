context('Home', () => {
  it('should redirect to home', function () {
    cy.visit('http://localhost:3001/');

    // we should be redirected to /home
    cy.url().should('include', '/home');
  });
});
