var link = require('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/Utility/queueLinkBL.js');
var linkObject = new link();
class Player {
    constructor(player) {
        this.player = player;
    }
    sortByRank() {
      this.player.sort();
    }
    maintainCardsInQueue() {
        for (let i = 0; i < this.player.length; i++) {
            linkObject.enqueue(this.player[i]);
        }
    }
    display() {
        console.log('here')
        linkObject.display(this.player, linkObject.getHead());
    }
}
module.exports = Player;