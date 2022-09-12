

describe('scenario 1', ()=>{
    it('add a product to cart', ()=>{
        cy.viewport(1440, 900)

        cy.visit('https://www.amazon.com.br/')

        cy.get('#twotabsearchtextbox').type('Echo dot{enter}')
        cy.get('#nav-search-submit-button').click()
        cy.get('[data-asin="B084DWCZY6"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
        cy.get('#add-to-cart-button').click()

        cy.get('.a-padding-medium').should('contain.text', 'Adicionado ao carrinho')

    })
})