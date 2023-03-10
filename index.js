var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
	
    let deck = [];

	for(let i = 0; i < suits.length; i++) {
		
        for(let x = 0; x < values.length; x++) {
			
            let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}


function shuffle(deck) {
	
    // for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++) {
		
        let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function renderDeck(deck) {

	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < deck.length; i++) {

		var card = document.createElement("div");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon='&hearts';
		else if (deck[i].Suit == 'spades')
		icon = '&spades';
		else if (deck[i].Suit == 'diamonds')
		icon = '&diams';
		else
		icon = '&clubs';

		card.innerHTML = deck[i].Value + '' + icon;
		card.className = 'card';
	document.getElementById("deck").appendChild(card);
	}
}

getDeck()
