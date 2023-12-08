/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

  describe('Test Suite', () => {

    it('should Create a Test Suite', () => {

      for (let i = 1; i <= 5; i++) {
        const testTitle = `Test${i}`;

      cy.visit('/')
      cy.get(':nth-child(6) > .nav-link').click()
      cy.login('#Email', '#Password')
      cy.get('.sidebar-hamburger > label > span > .fas').click()
      cy.get(':nth-child(2) > a > :nth-child(2)') .click()
      cy.get(':nth-child(1) > .row > .col-sm-5 > .custom-control > label > .text > [data-placement="bottom"]').click()
      cy.get(':nth-child(3) > .pn-link').click()
      cy.get('#btnTestPlan').click()
      cy.get('#txtAddEditTestSuiteTitle').type(testTitle)
      cy.get('#btnAddEditTestSuite').click()
      
      }
  })

})
    
    it('should Edit a Test Suite', () => {
    
      cy.visit('/')
      cy.get(':nth-child(6) > .nav-link').click()
      cy.login('#Email', '#Password')
      cy.get('.sidebar-hamburger > label > span > .fas').click()
      cy.get(':nth-child(2) > a > :nth-child(2)') .click()
      cy.get(':nth-child(1) > .row > .col-sm-5 > .custom-control > label > .text > [data-placement="bottom"]').click()
      cy.get(':nth-child(3) > .pn-link').click()
      cy.get(':nth-child(2) > .complete-li > .row > .col-lg-6 > .custom-control > label > .text > a').click()
      cy.get('#editTestSuite > .icon-ic_edit').click()
      cy.get('#txtAddEditTestSuiteTitle').clear()
      cy.get('#txtAddEditTestSuiteTitle').type('Edit Test')
      cy.get('#btnAddEditTestSuite').click()
      cy.get('#suiteName').contains('Edit Test')
     
  })

