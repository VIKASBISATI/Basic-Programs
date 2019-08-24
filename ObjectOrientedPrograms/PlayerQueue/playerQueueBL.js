/******************************************************************************
* @Purpose : PlayerQueue
* @file : playerQueueBL.js
* @overview : To distribute the cards to four players after sorting the cards and main
taining the cards in a queue
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var link = require('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/Utility/queueLinkBL.js');
var linkObject = new link();
class Player {
    constructor(player) {
        this.player = player;
    }
    sortByRank() {
      this.player.sort();
    }
    //adding the data in the queue by using the method enqueue
    maintainCardsInQueue() {
        for (let i = 0; i < this.player.length; i++) {
            linkObject.enqueue(this.player[i]);
        }
    }
    display() {
        //displaying the elements present in the queue
        console.log('here')
        linkObject.display(this.player, linkObject.getHead());
    }
}
module.exports = Player;