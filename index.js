// Deck of cards
const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const deck = []
suits.forEach(suit => {
    values.forEach(value => {
        const card = {
            suit,
            value
        }
        deck.push(card)
    })
})

console.log(deck)