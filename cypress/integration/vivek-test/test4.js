describe('advanced handles test group',function(){

    it('alert handling',()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        cy.get('[onclick="displayConfirm()"]').click()
        cy.on('window:alert',(str)=>
    {
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
 
    cy.on('window:confirm',(str)=>
    {
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')
        cy.go('forward')
    })
})
