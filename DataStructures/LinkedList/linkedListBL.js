class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;
    }

    insertionAtBegining(data) {
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            return true;
        }
        n.next = this.head;
        this.head = n;

        return true;
    }
    insertionAtEnd(data) {
        console.log('Entered data ' + data)
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            return true;
        }
        let t = this.head;
        while (t.next != null) {
            t = t.next;
        }
        }
        n.next = t.next;
        t.next = n;
        console.log('head data' + this.head.data);
        return true;
    }
    deleteAtBegining() {
        if (this.head.next == null) {
            this.head = null;
            return true;
        }
        this.head = this.head.next;

    }
    size() {
        let c = 1;
        let t = this.head;
        while (t.next != null) {
            t = t.next;
            c++;
        }
        return c;
    }
    sort() {
        console.log("soize" + this.size())
    }

    display() {
        let temp = this.head;
        // console.log(this.head.next.data);
        var str = '';
        while (temp != null) {
            str = str + temp.data;
            if (temp.next != null) {
                str = str + '-->'
            }
            temp = temp.next;
        }
        console.log(str);
        return str;
    }
    search(key) {
        if (this.head == null) {
            return [false];
        }
        let t = this.head;
        let index = 0;
        while (t.next != null) {
            if (t.data == key) {
                return [true, index];
            }
            t = t.next;
            index++;
        }
        return [false];
    }
    deleteAtSpecificPosition(pos) {

        if (this.head == null) {
            return;
        }
        let temp = this.head;
        if (pos == 0) {
            this.head = temp.next;
        }
        for (let i = 0; i < pos - 1 && temp != null; i++) {
            temp = temp.next;
        }
        if (temp == null || temp.next == null) {
            return;
        }
        let nodeToBeDeleted = temp.next.next;
        let d = temp.next.data;
        temp.next = nodeToBeDeleted;
        return d;
    }
}
module.exports = LinkedList;