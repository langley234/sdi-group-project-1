describe("Home page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it (`should have a button with the text 'Load Character'`, () => {
        expect(cy.get('button').contains('Home').should('exist'));
    });

    it (`should have a button with the text 'Load Character'`, () => {
        expect(cy.get('button').contains('Load Character').should('exist'));
    });

    it (`should have a button with the text 'Save Character'`, () => {
        expect(cy.get('button').contains('Save Character').should('exist'));
    });

    it (`should have a div that has text 'Icon' in it somewhere'`, () => {
        expect(cy.get('div').contains('Icon').should('exist'));
    });

    it (`should have a div that has text 'Name' in it somewhere'`, () => {
        expect(cy.get('div').contains('Name').should('exist'));
    });

    it (`should have a div that has text 'Race' in it somewhere'`, () => {
        expect(cy.get('div').contains('Race').should('exist'));
    });

    it (`should have a div that has text 'Class' in it somewhere'`, () => {
        expect(cy.get('div').contains('Class').should('exist'));
    });

    it (`should have a div that has text 'Level' in it somewhere'`, () => {
        expect(cy.get('div').contains('Level').should('exist'));
    });

    it (`should have a div that has text 'Alignment' in it somewhere'`, () => {
        expect(cy.get('div').contains('Alignment').should('exist'));
    });

    it (`should have a div that has text 'Armor/HP/Speed' in it somewhere'`, () => {
        expect(cy.get('div').contains('Armor/HP/Speed').should('exist'));
    });

    it (`should have a div that has text 'Equipment' in it somewhere'`, () => {
        expect(cy.get('div').contains('Equipment').should('exist'));
    });

    it (`should have a div that has text 'Proficiencies/Languages' in it somewhere'`, () => {
        expect(cy.get('div').contains('Proficiencies/Languages').should('exist'));
    });

    it (`should have a div that has text 'Abilities' in it somewhere'`, () => {
        expect(cy.get('div').contains('Abilities').should('exist'));
    });

    it (`should have a div that has text 'Inventory' in it somewhere'`, () => {
        expect(cy.get('div').contains('Inventory').should('exist'));
    });

    it (`should have a div that has text 'Skills' in it somewhere'`, () => {
        expect(cy.get('div').contains('Skills').should('exist'));
    });

    it (`should have a div that has text 'Features/Traits' in it somewhere'`, () => {
        expect(cy.get('div').contains('Features/Traits').should('exist'));
    });

    it (`should navigate to the url '/icon_selection' when the user clicks the Icon button`, () => {
        return cy.get('button').contains('Icon').click()
            .then(() => {
                cy.url().should('eq', 'http://localhost:3000/icon_selection')
            })
    });

    it (`should be able to type a name into an input inside the div with 'name'`, () => {
        cy.get('div').contains('Name').type('Hello World');
    });

    it (`should navigate to the url '/race_selection' when the user clicks the Choose Race button`, () => {
        return cy.get('button').contains('Race').click()
            .then(() => {
                cy.url().should('eq', 'http://localhost:3000/race_selection')
            })
    });

    it (`should navigate to the url '/class_selection' when the user clicks the Choose Race button`, () => {
        return cy.get('button').contains('Class').click()
            .then(() => {
                cy.url().should('eq', 'http://localhost:3000/class_selection')
            })
    });
});