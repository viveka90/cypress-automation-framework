/// <reference types="cypress" />
import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/ContactUs_PO'
describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 10000, 'pageLoadTimeout', 30000)
    const homepage_PO = new Homepage_PO
    const contactuspage_PO = new ContactUs_PO
    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach(function () {
        homepage_PO.visitHomePage()
        homepage_PO.clickContactUsButton()
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        contactuspage_PO.contactFormSubmission(Cypress.env("first_name"),
            data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactuspage_PO.contactFormSubmission(data.first_name,
            data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address')
    });
})