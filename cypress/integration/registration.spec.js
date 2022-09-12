
describe('scenario 3', ()=>{
    it('registration', ()=>{
        cy.viewport(1440, 900)

        cy.visit('https://www.amazon.com.br/')
        cy.get('#nav-link-accountList').click()
        cy.get('#createAccountSubmit').click()

        cy.get('#ap_customer_name').type('Camila Canoa')
        cy.get('#ap_email').type('camilacanoa@hotmail.com')
        cy.get('#ap_password').type('12345678')
        cy.get('#ap_password_check').type('12345678')

    })
})