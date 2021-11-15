class AutoStore_HomePage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("automation_test_store_url"))
        //cy.visit('/')
    }
    
    clickOnHairCareProduct(){
        cy.get('li a[href*="product/category"]').contains('Hair Care').click()
    }
}
export default AutoStore_HomePage_PO