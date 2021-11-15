describe('test group',function(){
    it('check box test',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').should('have.value','option1').should('not.be.checked').check()
        cy.get('#checkBoxOption1').should('be.checked').check()
        cy.get('input[type="checkbox"]').check(['option2'])
    })

    it('dropdown test',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#dropdown-class-example').then(function(valuett){
            const value = valuett.text()
            cy.log(value)
        })
        
        cy.get('#dropdown-class-example').should('have.value','').select('option2')
        .should('have.value','option2')
        
        
    })

    it('dynamic dropdown test',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#autocomplete').type('in')
        //cy.get('.ui-menu-item').contains('Bahrain').click()

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($i, index, $list)=>{
            const value = $i.text()
            if(value === 'India'){
                cy.wrap($i).click()
                cy.get('#autocomplete').should('have.value', 'India')
            }
        })
    })

    it('hide show validation',function(){
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('radio button validation',function(){
        
        cy.get('input[value="radio2"').click().should('be.checked')
    })
})