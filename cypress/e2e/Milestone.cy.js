/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

  describe('Milestone', () => {

    it('should Create a Project a', () => {

      cy.visit('/')
      cy.get(':nth-child(6) > .nav-link').click()
      cy.login('#Email', '#Password')
      cy.get('.sidebar-hamburger > label > span > .fas').click()
      cy.get(':nth-child(2) > a > :nth-child(2)') .click()
      cy.get('#lnkCurrentEditProject_0 > .btn').click()
      cy.get('#Name').type('Cypress')
      cy.get('#selectForSelectedUserContainerId').click()
      cy.get('#spanSelectingUserName_2340').click()
      cy.get('#btnEditProject').click()
      cy.get(':nth-child(2) > .row > .col-sm-5 > .custom-control > label > .text > [data-placement="bottom"]').contains('Cypress')
    
    })
    
    it('should Create a Milestone a', () => {
    
      cy.visit('/')
      cy.get(':nth-child(6) > .nav-link').click()
      cy.login('#Email', '#Password')
      cy.get('.sidebar-hamburger > label > span > .fas').click()
      cy.get(':nth-child(2) > a > :nth-child(2)') .click()
      cy.get(':nth-child(1) > .row > .col-sm-5 > .custom-control > label > .text > [data-placement="bottom"]').click()
      cy.get('.edit-text > .font-weight-bold').contains('Cypress')
      cy.get(':nth-child(2) > .pn-link').click()
      cy.get('#lnkCurrentEditMilestone_0').click()
      cy.get('#Name').type('Milestone 1')
      cy.get('#dpStartDate').type('2023-12-01')
      cy.get('#dpEndDate').type('2023-12-10')
      cy.get('#btnAddEditMilestone').click()
      cy.get('#rowListContainer3_2920_Milestone1 > .row > .pl-0 > .custom-control > .custom-control-label > .text > .pc-title').contains('Milestone 1')
    
    
    })
  })

