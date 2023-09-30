/// <reference types="cypress" />
describe('Login & Filling up form data for booking an appoinment', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    
    cy.wait(1000)
    cy.get('#btn-make-appointment')
      .click()
    
    cy.get('#txt-username').type('John Doe',{delay: 100})
    cy.get('#txt-password').type('ThisIsNotAPassword', {delay : 100})
    cy.get('#btn-login').click()
    cy.wait(1000)

    cy.get('select').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('label').should('contain','Medicare')
    cy.wait(2000)
    cy.get('#txt_visit_date').invoke('val','30/09/2023')
    cy.get('#txt_comment').click()
    cy.get('#txt_comment').type('This is a test comment. It shold be good for the system.', {delay:10})
    cy.get('#btn-book-appointment').click()
    cy.get('h2').should('contain', 'Appointment Confirmation')
  })
})