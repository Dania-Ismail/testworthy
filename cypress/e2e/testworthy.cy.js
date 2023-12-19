/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

it.only('should login to the application 2', () => {

  cy.visit('https://testworthy.us')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.login('#Email', '#Password')
  cy.get('span > a').contains('My Dashboard')
  cy.contains('Incorrect email address and / or password.').should('not.exist')
  cy.url().should('eq', 'https://testworthy.us/Dashboard/Index')
}) 

it('Should not login to the application', () => {

  cy.visit('https://testworthy.us')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.get('#Email').type('daniaism@yopmail.com')
  cy.get('#Password').type('admin@123')
  cy.get('#btnLogin').click()
  cy.contains('Incorrect email address and / or password.').should('exist')
  cy.url().should('eq', 'https://testworthy.us/Login')
})

it('Should Logout of the application', () => {

  cy.visit('https://testworthy.us')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.login('#Email', '#Password')
  cy.get('#dropdownMenuLinkMainHeader').click()
  cy.get('.dropdown-menu > [href="javascript:void(0)"]').click()
  cy.get('#frmLogout > .btn').click()
})

it('Should not Logout of the application', () => {

  cy.visit('/')
  cy.login('#Email', '#Password')
  cy.get('#dropdownMenuLinkMainHeader').click()
  cy.get('.dropdown-menu > [href="javascript:void(0)"]').click()
  cy.get('#logoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-light-border').trigger('mouseover').click({force:true})
})