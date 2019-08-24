/******************************************************************************
* @Purpose : PlayerQueue
* @file : playerQueue.js
* @overview : To distribute the cards to four players after sorting the cards and main
taining the cards in a queue
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var qo = require('./playerQueueBL');
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
var player = [];
player.length = 52;
//Logic fo rshuffling the cards
for (let i = 0; i < deckOfCards.length; i++) {
    let rand = i + parseInt(Math.random() * (deckOfCards.length - i));
    let s = deckOfCards[rand];
    deckOfCards[i] = deckOfCards[rand];
    deckOfCards[rand] = s;
}
var player1 = [], player2 = [], player3 = [], player4 = [];
player1.length = 13;
player2.length = 13;
player3.length = 13;
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
var queueObject = new qo(player1);
//calling the methods for sorting by the order of rank
queueObject.sortByRank();
//maintaining the data in the queue
queueObject.maintainCardsInQueue();
//call for displaying the elements
queueObject.display()
