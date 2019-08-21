/******************************************************************************
* @Purpose : PrimeAnagrams Using Stack implemented using Linked List
* @file : stackUsingLinkedList.js
* @overview :Finding the prime numbers that are anagrams using Stack data structure
implemented with the help of linked list in a reverse order
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
    display(arr) {
        var str='';
        let temp = this.top;
        while (temp != null) {
            arr.push(temp.data)
            temp = temp.next;
        }
        // console.log(str);
        return arr;
    }
}
module.exports = StackUsingLinkedList;