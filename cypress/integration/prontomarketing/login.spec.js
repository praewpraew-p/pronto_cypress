describe('Login', function() {
  it('should login successfully', function() {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').as('search_input')
    cy.get('@search_input').type('HelloWorld')
    cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').as('search_button')
    cy.get('@search_button').click()
  })
})
