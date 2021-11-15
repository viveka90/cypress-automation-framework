///<reference types="cypress" />

describe('group1',function(){
it('test1',function(){
    
//Arrange initial app state
    //visit a page
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //Query an element
    
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.products').as('productLocator')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.product-action button:visible:first').click() //click on first visible element matched
    //cy.get('.product-action button').click({multiple:true}) //click on all element matched
    //cy.get('@productLocator').find('.product').eq(3).contains('ADD TO CART').click()
    cy.get('@productLocator').find('.product').should('have.length',4).then(function(){
        console.log('promised handling')
    })
    cy.get('@productLocator').find('.product').each(function($i, index, $list) {
        const productName = $i.find('h4.product-name').text()
        if(productName.includes('Carrot')){
            cy.wrap($i).find('button').click()
            cy.log('element clicked')
        }
    })
    cy.get('.brand').should('include.text','GREEN')
    cy.get('.brand').should('include.text','KART')
    //cy.get('.greenLogo').should('have.css','color').and('font-family',/Roboto/)
    cy.get('.brand').then((logot)=>{
        cy.log(logot.text())
    })
//Act - take an action
    //Interact with the element
//Assert - make an assertion
    //create arrert on page content
});
});