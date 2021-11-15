describe('advanced automation group',function(){

    it('web table',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#product').find('tr td:nth-child(2)')
        cy.get('#product').find('tr td:nth-child(2)').each(function($i, index, $list){
            const value = $i.text()
            if(value.includes('JMETER')){
                cy.get('#product').find('tr td:nth-child(3)').eq(index).then(function(element){
                    cy.log(element.text())
                    expect(element.text()).to.equal('25')
                })
                cy.get('#product').find('tr td:nth-child(3)').eq(index).should('have.text','25')
            }
        })
    })
    it('mouse hover menu',()=>{
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
    })
})