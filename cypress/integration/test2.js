///<reference types="cypress" />

describe('group1',function(){
    it('test1',function(){
        
    //Arrange initial app state
        //visit a page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //Query an element
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then((logot)=>{
            cy.log(logot.text())
        })
        cy.get('.products').as('productLocator')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('@productLocator').find('.product').should('have.length',4).then(function(){
            console.log('log promises handling')
        })
        //adding item to cart
        cy.get('@productLocator').find('.product').each(function($i, index, $list) {
            const productName = $i.find('h4.product-name').text()
            if(productName.includes('Carrot')){
                cy.wrap($i).find('button').click()
                cy.log('element clicked')
            }
        })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    //Act - take an action
        //Interact with the element
    //Assert - make an assertion
        //create arrert on page content
    });
    });