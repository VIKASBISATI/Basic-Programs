/******************************************************************************
* @Purpose : DeckOfCards
* @file : deckOfCards.js
* @overview : To distribute the cards to players after shuffling and storing the shuffled
cards in a two dimensional array 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
let operation = () => {
    console.log('operation begins')
    //initialising the suit and rank arrays
    var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    console.log(suit);
    var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    var len = suit.length * rank.length;
    var deckOfCards = [];
    deckOfCards.length = len;
    //maintaining the 52 cards of different types in the array deckOfCards
    for (let i = 0; i < rank.length; i++) {
        for (let j = 0; j < suit.length; j++) {
            deckOfCards[4 * i + j] = rank[i] + ' of type ' + suit[j];
        }
    }
    console.log('Before');
    console.log(deckOfCards);
    // console.log(deckOfCards.length);
    var player = [];
    player.length = 52;
    //Logic fo rshuffling the cards
    for (let i = 0; i < deckOfCards.length; i++) {
        let rand = i + parseInt(Math.random() * (deckOfCards.length - i));
        // console.log('rand is '+rand);
        let s = deckOfCards[rand];
        deckOfCards[i] = deckOfCards[rand];
        deckOfCards[rand] = s;
    }
    console.log('After');
    console.log(deckOfCards.length);
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    player1.length = 13;
    player2.length = 13;
    player3.length = 13;
    // console.log(i);
    // console.log('entered')
    player4.length = 13;
    var [a, b, c, d] = [0, 0, 0, 0];
    //distributing the cards to the four players
    for (let i = 0; i < deckOfCards.length; i++) {
        if (i < 13) {
            player1[a++] = deckOfCards[i];
        }
        else if (i >= 13 && i < 26) {
            player2[b++] = deckOfCards[i];
        }
        else if (i >= 26 && i < 39) {
            player3[c++] = deckOfCards[i];
        }
        else if (i >= 39 && i < 52) {
            player4[d++] = deckOfCards[i];
        }
    }
    let finalTwoDArray = [];
    // console.log('Player1');
    // console.log(player1);
    // console.log('Player2');
    // console.log(player2);
    // console.log('Player3');
    // console.log(player3);
    // console.log('Player4');
    // console.log(player4);
    //finally pushing all the players to the 2D array
    finalTwoDArray.push(player1);
    finalTwoDArray.push(player2);
    finalTwoDArray.push(player3);
    finalTwoDArray.push(player4);
    console.log(finalTwoDArray);
}
module.exports={operation};