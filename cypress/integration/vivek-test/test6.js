///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('advanced window handling 2',()=>{

    it('new window handles',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(parm){
            const hrefValue = parm.prop('href')
            cy.log(hrefValue)
            cy.visit(hrefValue)
        })
        cy.go('back')
        cy.url().should('include','rahul')
    })
    it('frames handling',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="#/mentorship"]').each(($i, index,$list)=>{
            const value = $i.text()
            if((value==='Mentorship')){
                if(cy.wrap($i).should('be.visible')){
                    cy.wrap($i).click()
                }
            }
        })
    })
})