/// <reference types="cypress"/>

describe('Criando cenario de teste para o site do lol esports', () => {

    it('Caso de teste 1: Entrando no twitter do cblol através da primeira noticia do site e verificando se eh o perfil do cblol', () => {

        cy.visit('https://lolesports.com/')
        cy.get('.osano-cm-deny').click()
        cy.get('.cta').click()
        cy.get('b').click()
        cy.origin('https://twitter.com', () => {
            cy.get('.r-1awozwy.r-1wbh5a2 > .r-1wbh5a2 > .css-1dbjc4n > .css-1hf3ou5 > .css-901oao').should('contain.text', 'CBLOL')
        });
    })

    it('Caso de teste 2: Vendo os jogos mais recentes do cblol e analisando se a final realmente foi 3 a 1', () => {

        cy.visit('https://lolesports.com/')
        cy.get('.osano-cm-deny').click()
        cy.get('[data-testid="riotbar:mobile:menu:button-open"]').click()
        cy.get('[data-testid="riotbar:mobile:link-schedule"]').click()
        cy.get('#sticky-bar-filter').click()
        cy.get(':nth-child(2) > .info').click()
        cy.get(':nth-child(1) > .info').click()
        cy.get('.save').click()
        cy.get('.results-label').click()
        cy.get(':nth-child(105) > .single > .teams > .score > .scoreTeam1').should('have.text', '1') && cy.get(':nth-child(105) > .single > .teams > .score > .scoreTeam2').should('have.text', '3')
    })

    it('Caso de teste 3: Vendo o replay do ultimo jogo da final da lec e analisando se eh a G2 e Fnatic na final', () => {

        cy.visit('https://lolesports.com/')
        cy.get('.osano-cm-deny').click()
        cy.get('[data-testid="riotbar:mobile:menu:button-open"]').click()
        cy.get('[data-testid="riotbar:mobile:link-vods"]').click()
        cy.get('.league-selector').click()
        cy.get(':nth-child(9) > .info').click()
        cy.get(':nth-child(2) > .wrapper > .game-selector > .VodsGameSelector > .games > .game4').click()
        cy.get(':nth-child(1) > .tricode').should('have.text', 'G2') && cy.get(':nth-child(3) > .tricode').should('have.text', 'FNC')
    })
})


describe('Criando cenario de teste para o site do jogo league of legends', () => {

    it('Caso de teste 4: Tentando registrar um usuario no site com falha', () => {

        let email = criarEmail()

        cy.visit('https://www.leagueoflegends.com/pt-br/?utm_medium=card1%2Blolesports.com&utm_source=riotbar')
        cy.get('.osano-cm-deny').click()
        cy.get('[data-testid="riotbar:mobile:menu:button-open"]').click()
        cy.get('._3DiUpr1eRDskF1pPKxKhRX').click()
        cy.get('input').type(email)
        cy.get('.next-button > button').click()
        cy.get('.error-list-item').should('contain.text', 'Insira um endere')
    })

    it('Caso de teste 5: Entrando na aba campeoes e verificando se selecionou o campeao "Twitch" ', () => {

        cy.visit('https://www.leagueoflegends.com/pt-br/?utm_medium=card1%2Blolesports.com&utm_source=riotbar')
        cy.get('.osano-cm-deny').click()
        cy.get('[data-testid="riotbar:mobile:menu:button-open"]').click()
        cy.get('[data-testid="riotbar:mobile:link-champions"]').click()
        cy.get('[href="/pt-br/champions/twitch/"]').click()
        cy.get('[data-testid="overview:title"]').should('have.text', 'Twitch')
    })
})


describe('Criando cenario de teste para o site do universo de league of legends', () => {

    it('Caso de teste 6: Verificando a aba quadrinhos e verificando se selecionou "Destinos Cruzados" ', () => {

        cy.visit('https://universe.leagueoflegends.com/pt_BR/');
        cy.get('.osano-cm-deny').click();
        cy.get('[data-testid="riotbar:mobile:menu:button-open"]').click();
        cy.get('[data-testid="riotbar:mobile:link-comics"]').click();
        cy.get('span.QButton_hextech_background_3ea1', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get('.subtitle_2s_q').should('contain.text', 'Destinos Cruzados');

    })
})


function criarEmail() {

    let horas = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    let segundos = new Date().getSeconds().toString()
    let email = horas + minutos + segundos + '@gmail.com'

    return email
}
