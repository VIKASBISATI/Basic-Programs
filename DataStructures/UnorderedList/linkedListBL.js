/******************************************************************************
* @Purpose : PrimeAnagrams
* @file : linkedListBL.js
* @overview :Finding PrimeNumbers that are Anagrams after adding the data into the linkedlist
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
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
    /*inserting the node at the begining i.e, 2 3 are the values to be inserted then the output
    will be like 3-->2-->null*/
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
    /*inserting the node at the begining i.e, 2 3 are the values to be inserted then the output
    will be like 2-->3-->null*/
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
        n.next = t.next;
        t.next = n;
        console.log('head data' + this.head.data);
        return true;
    }
    //inserting the element after sorting there are three condition to ensure 
    //that is at the begining at the middle and at the end
    insertAfterSort(data) {
        // console.log('entered');
        var n = new Node(data);
        if (this.head == null || this.head.data.localeCompare(data) > 0) {
            n.next = this.head;
            console.log(n.data);
            this.head = n;
            return n;
        }
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.data.localeCompare(data) > 0) {
                prev.next = n;
                n.next = current;
                return;
                // return this.head;
            }

            prev = current;
            current = current.next;
        }
        prev.next = n;
        // console.log(prev.next.data);
        // console.log(this.head.data)
        // return this.head;
    }
    //method for deleting the node at the begining
    deleteAtBegining() {
        if (this.head.next == null) {
            this.head = null;
            return true;
        }
        this.head = this.head.next;

    }
    //size method is used to find the size of the linked list
    size() {
        let c = 0;
        let t = this.head;
        while (t.next != null) {
            t = t.next;
            c++;
        }
        return c;
    }
    //display method is used for displaying the linked list 
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
    //searching for key when exits return true else false
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
    //delete at specific position is used to delete the element at particular position
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
// let o = new LinkedList();
// o.insertAfterSort('c');
// o.insertAfterSort('a');
// o.insertAfterSort('b');
// o.display();
module.exports = LinkedList;
