describe("Home page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it (`should have a button with the text 'Load Character'`, () => {
        expect(cy.get('button').contains('Home').should('exist'));
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

    it (`should navigate to the url '/alignments' when the user clicks the Choose Race button`, () => {
        return cy.get('button').contains('Class').click()
            .then(() => {
                cy.url().should('eq', 'http://localhost:3000/alignments')
            })
    });
});

describe("Alignment Page", () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3000/alignments')
    })

    it('Should display a button for each Alignment', () => {
        expect(cy.get('ButtonGroup').id.contains('0').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('1').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('2').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('3').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('4').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('5').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('6').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('7').should('exist'))
        expect(cy.get('ButtonGroup').id.contains('8').should('exist'))
    })

    it('Each Alignment should have a description', () => {
        expect(cy.get('Alignment').contains('Description').should('exist'))
    })
})


describe("Race_Selector page", () => {
    beforeEach(() => {
        cy.visit ('http://localhost:3000/race_selector')
    })

    it('Should display a button for each race', () => {



        cy.contains("Dragonborn")
        cy.contains("Dwarf")
        cy.contains("Elf")
        cy.contains("Gnome")
        cy.contains("Half-Elf")
        cy.contains("Half-Orc")
        cy.contains("Halfling")
        cy.contains("Human")
        cy.contains("Tiefling")
        cy.contains("Select Race Below")

    })
})