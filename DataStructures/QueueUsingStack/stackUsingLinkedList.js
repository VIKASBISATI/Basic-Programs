class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackUsingLinkedList {
    constructor(size) {
        this.top = null;
        this.size = size;
        this.count = 0;
    }

    isFull() {
        if (this.count <= this.size) {
            return false;
        }
        return true;
    }
    push(data) {
        if (!this.isFull()) {
            this.count++;
            let n = new Node(data);
            n.next = this.top;
            this.top = n;
        }
    }
    isEmpty() {
        if (this.top == null) {
            return true;
        }
        return false;
    }

    pop() {
        if (!this.isEmpty()) {
            let d = this.top.data;
            this.top = this.top.next;
            return d;
        }
    }


    display() {
        let temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
module.exports = StackUsingLinkedList