///<reference types="cypress"/>
import AutoStore_HomePage_PO from '../../support/pageObjects/auto-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCarePage_PO from '../../support/pageObjects/auto-test-store/AutoStore_HairCarePage_PO'
describe('add product test group', () => {
    const autoStore_HomePage_PO = new AutoStore_HomePage_PO
    const autoStore_HairCarePage_PO = new AutoStore_HairCarePage_PO
    beforeEach(function () {
        cy.fixture('products').then(function(data){
            globalThis.data = data
        })
        autoStore_HomePage_PO.visitHomePage()
        autoStore_HomePage_PO.clickOnHairCareProduct();
    })
    it('add multiple product to basket', {
        retries : {
            runMode : 1,
            openMode : 2
        }
    },function () {
        // globalThis.data.product_name.forEach((element) => {
        //     autoStore_HairCarePage_PO.addProductToBasket(element)
        // });
        // autoStore_HairCarePage_PO.clickOnShoppingKart()
        autoStore_HairCarePage_PO.completeHairCarePageOperation()
            

    })
})
