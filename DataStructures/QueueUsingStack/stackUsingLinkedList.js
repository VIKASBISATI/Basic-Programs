/******************************************************************************
* @Purpose : Balanced
* @file : stackBL.js
* @overview : To find the given expression is balanced or not
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//implementation of stack using linked list
class StackUsingLinkedList {
    constructor(size) {
        this.top = null;
        this.size = size;
        this.count = 0;
    }
    //checking for the stack is full or not
    isFull() {
        if (this.count <= this.size) {
            return false;
        }
        return true;
    }
    //pushing the data into the stack
    //for example 10 20 30 then the program works like 30-->20-->10-->null
    push(data) {
        if (!this.isFull()) {
            this.count++;
            let n = new Node(data);
            n.next = this.top;
            this.top = n;
        }

    }
    //checking the stack is empty or not
    isEmpty() {
        if (this.top == null) {
            return true;
        }
        return false;
    }
    //popping the element when the stack is not empty
    pop() {
        if (!this.isEmpty()) {
            let d = this.top.data;
            this.top = this.top.next;
            return d;
        }
    }
    //displaying the elements in the stack
    display() {
        let temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    //displaying the elements in the stack in reverse order 
    displayReverse(t) {
        if (t == null) {
            return;
        }
    }
}
module.exports = StackUsingLinkedList