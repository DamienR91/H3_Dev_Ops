describe('My First Test', () => {
    it('visits some pages', () => {
      cy.visit('https://nowledgeable.com');
  
      cy.get('h1').then((title) => {
        expect(title).to.contain('joy');
      });
    });

    describe('Test de connexion', () => {
        it('Remplir le formulaire de connexion', () => {

          cy.visit('https://nowledgeable.com/login');
      
          cy.get('input[id="username"]').type('damienraunier@gmail.com');
      
          cy.get('input[id="password"]').type('VotreMotDePasse');
      
          cy.get('button[id="submit"]').click();

          cy.contains('Se connecter').should('exist');
        });
      });
      
  });
  