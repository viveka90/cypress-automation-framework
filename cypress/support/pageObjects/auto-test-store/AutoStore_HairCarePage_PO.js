class AutoStore_HairCarePage_PO {
    
    addProductToBasket(productName){
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text() === productName) {
                cy.log($el.text())
                cy.get('.productcart').eq(index).click();
            }
        });
    }

    clickOnShoppingKart(){
        cy.get('.dropdown-toggle > .fa').click()
    }

    
    completeHairCarePageOperation(){
        globalThis.data.product_name.forEach((element) => {
            cy.addProductToBasket(element).then(()=>{
                debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click()
    }
}
export default AutoStore_HairCarePage_PO