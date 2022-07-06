
context("Home page", () => {
    it("deve clicar", () => {
        cy.visit("http://localhost:3000");
        cy.contains('Teste').click();
    })
})