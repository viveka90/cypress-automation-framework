/// <reference types="cypress" />

describe("Iterate over elements", () => {
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        
        cy.screenshot()
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.screenshot()
    })
    it("Log information of all hair care products", () => {
      
      
      cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
          cy.log("Index: " + index + " : " + $el.text())
          cy.screenshot()
      });
    });
    it("Add specific product to basket",{browser: chrome}, () => {
  
    //   cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //       if($el.text().includes('Curls to straight Shampoo')) {
    //           cy.wrap($el).click()
    //       }
    //   });
    cy.selectProduct('Curls to straight Shampoo')
    cy.screenshot()
    });

    
  });
  