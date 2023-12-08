/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

it('should Create a Project a', () => {

  cy.visit('/')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.login('#Email', '#Password')
  cy.get('.sidebar-hamburger > label > span > .fas').click()
  cy.get(':nth-child(2) > a > :nth-child(2)') .click()
  cy.get('#lnkCurrentEditProject_0 > .btn').click()
  cy.get('#Name').type('test2')
  cy.get('#selectForSelectedUserContainerId').click()
  cy.get('#spanSelectingUserName_2340').click()
  cy.get('#btnEditProject').click()
  cy.get(':nth-child(2) > .row > .col-sm-5 > .custom-control > label > .text > [data-placement="bottom"]').contains('test2')

})

it('should Edit a Project', () => {

  cy.visit('/')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.login('#Email', '#Password')
  cy.get('.sidebar-hamburger > label > span > .fas').click()
  cy.get(':nth-child(2) > a > :nth-child(2)') .click()
  cy.get('.select-row-list > ul > li:first').invoke('mouseover')
  .find('.hover-row-edit .edit-icon i.icon-ic_edit').first()//Select the first matching element
  .click({force: true});
  cy.get('#Name').type('Edit')
  cy.get('#btnEditProject').click()

})

it('should mark complete a project', () => {

  cy.visit('/')
  cy.get(':nth-child(6) > .nav-link').click()
  cy.login('#Email', '#Password')
  cy.get('.sidebar-hamburger > label > span > .fas').click()
  cy.get(':nth-child(2) > a > :nth-child(2)') .click()
  cy.get('.select-row-list > ul > li:first').invoke('mouseover')
  .find('.hover-row-edit span.complete-tick-icon a').first()//Select the first matching element
  .click({force: true});
  cy.get('#btnMarkAsCompleteProject').click()
  cy.contains('Project Completed').should('exist')
  cy.get('#btnCloseConfirmComplete > .close_cross').click()
  cy.get(':nth-child(1) > .row > .col-sm-4 > .progress-icon > .icon-complete-tick').should('exist')
  })