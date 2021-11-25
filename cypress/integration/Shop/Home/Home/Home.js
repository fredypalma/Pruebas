
const url = 'http://localhost:8080/';
describe('Page Home',() =>{
    Given('que ingreso a la pagina principal', () => {
        cy.visit(url);
    });

    Then('veo el titulo {string} de la pagina', (title) => {
        cy.contains(title);
    });

    Given('que estoy en la pagina principal', () => {
        cy.visit(url);
    });

    Then('veo el titulo {string} de la lista de productos', (title) => {
        cy.contains(title);
    });
});


