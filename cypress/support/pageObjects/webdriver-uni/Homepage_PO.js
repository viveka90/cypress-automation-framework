class HomePage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("webdriver_test_store_url"))
    }
    clickContactUsButton(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }
}
export default HomePage_PO