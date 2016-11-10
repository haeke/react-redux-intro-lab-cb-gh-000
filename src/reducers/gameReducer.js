const initialState = {
  game: {
    winner: null,
    userCards: [],
    aiCards: [],
    deck: [
     {name:"Ace of Diamonds", value: 1},
     {name:"Ace of Spades", value: 1},
     {name:"Ace of Clubs", value: 1},
     {name:"Ace of Hearts", value: 1},
     {name:"Two of Diamonds", value: 2},
     {name:"Two of Spades", value: 2},
     {name:"Two of Clubs", value: 2},
     {name:"Two of Hearts", value: 2},
     {name:"Three of Diamonds", value: 3},
     {name:"Three of Spades", value: 3},
     {name:"Three of Clubs", value: 3},
     {name:"Three of Hearts", value: 3},
     {name:"Four of Diamonds", value: 4},
     {name:"Four of Spades", value: 4},
     {name:"Four of Clubs", value: 4},
     {name:"Four of Hearts", value: 4},
     {name:"Five of Diamonds", value: 5},
     {name:"Five of Spades", value: 5},
     {name:"Five of Clubs", value: 5},
     {name:"Five of Hearts", value: 5},
     {name:"Six of Diamonds", value: 6},
     {name:"Six of Spades", value: 6},
     {name:"Six of Clubs", value: 6},
     {name:"Six of Hearts", value: 6},
     {name:"Seven of Diamonds", value: 7},
     {name:"Seven of Spades", value: 7},
     {name:"Seven of Clubs", value: 7},
     {name:"Seven of Hearts", value: 7},
     {name:"Eight of Diamonds", value: 8},
     {name:"Eight of Spades", value: 8},
     {name:"Eight of Clubs", value: 8},
     {name:"Eight of Hearts", value: 8},
     {name:"Nine of Diamonds", value: 9},
     {name:"Nine of Spades", value: 9},
     {name:"Nine of Clubs", value: 9},
     {name:"Nine of Hearts", value: 9},
     {name:"Ten of Diamonds", value: 10},
     {name:"Ten of Spades", value: 10},
     {name:"Ten of Clubs", value: 10},
     {name:"Ten of Hearts", value: 10},
     {name:"Jack of Diamonds", value: 10},
     {name:"Jack of Spades", value: 10},
     {name:"Jack of Clubs", value: 10},
     {name:"Jack of Hearts", value: 10},
     {name:"Queen of Diamonds", value: 10},
     {name:"Queen of Spades", value: 10},
     {name:"Queen of Clubs", value: 10},
     {name:"Queen of Hearts", value: 10},
     {name:"King of Diamonds", value: 10},
     {name:"King of Spades", value: 10},
     {name:"King of Clubs", value: 10},
     {name:"King of Hearts", value: 10}
   ]
  }
}

export default function gameReducer(state=initialState.game, action) {
  switch(action.type) {
    case 'EXECUTE_ROUND':
      const newDeck =[...state.deck]
      var randomIndex = Math.floor(Math.random() * state.deck.length)
      var card = newDeck.splice(randomIndex, 1)[0]
      const newUserCards = [...state.userCards, card]
      
      var randomIndex = Math.floor(Math.random() * state.deck.length)
      var card = newDeck.splice(randomIndex, 1)[0]
      const newAiCards = [...state.aiCards, card]

      const userTotal = newUserCards.reduce((acc, card) => acc + card.value, 0)
      const aiTotal = newAiCards.reduce((acc, card) => acc + card.value, 0)
      if (userTotal == 21) {
        return Object.assign({}, state, {userCards: newUserCards, aiCards: newAiCards, deck: newDeck, winner: 'You win!'})
      } else if (aiTotal == 21) {
        return Object.assign({}, state, {userCards: newUserCards, aiCards: newAiCards, deck: newDeck, winner: 'Computer wins!'})
      } else if (userTotal > 21) {
        return Object.assign({}, state, {userCards: newUserCards, aiCards: newAiCards, deck: newDeck, winner: 'You loose!'})
      } else if (aiTotal > 21) {
        return Object.assign({}, state, {userCards: newUserCards, aiCards: newAiCards, deck: newDeck, winner: 'You win!'})
      } else {
        return Object.assign({}, state, {userCards: newUserCards, aiCards: newAiCards, deck: newDeck})
      }
    case 'RESET_GAME':
      return initialState.game
    default: 
      return state;
  }
}
