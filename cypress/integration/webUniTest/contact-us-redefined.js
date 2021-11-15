/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach(function(){
        cy.fixture('example').as('user')
        //cy.fixture('user-details').then(function(data){
            //this.data=data
            //globalThis.data = data
        //})
        cy.visit("/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        
        cy.get('@user').then((user)=>{
            //cy.fillForm('[name="first_name"]', user.first_name)
            cy.fillForm('[name="first_name"]', Cypress.env("first_name"))
            cy.fillForm('[name="last_name"]', user.last_name)
            cy.fillForm('[name="email"]', user.email)
            cy.fillForm('textarea.feedback-input', user.feedback)
            
            })
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('@user').then((user2)=>{
            cy.get('[name="first_name"]').type(user2.first_name);
            cy.get('textarea.feedback-input').type(user2.feedback)
            cy.get('[name="last_name"]').type(user2.last_name);
            })
        //cy.get('[name="first_name"]').type(globalThis.data.first_name);
        //cy.get('[name="last_name"]').type(globalThis.data.last_name);
        //cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})