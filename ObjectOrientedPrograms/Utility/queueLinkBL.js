/******************************************************************************
* @Purpose : PrimeAnagrams Using queue implemented using Linked List
* @file : queueLink.js
* @overview :Finding the prime numbers that are anagrams using queue data structure
implemented with the help of linked list
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
//queue implementation using linked list
class QueueLink {
    //initially front and rear pointing to null
    QueueLink() {
        this.front = null;
        this.rear = null;
    }
    //inserting the data and incrementing the rear pointer 
    enqueue(data) {
        // console.log('enterd');
        // console.log(data);
        let t = new Node(data);
        if (this.rear == null) {
            this.rear = t;
            this.front = t;
        }
        this.rear.next = t;
        this.rear = t;
    }
    //getHead method is used for returning the front pointer
    getHead() {
        return this.front;
    }
    //deleting the data in FIFO maner(First In First Out)
    dequeue() {
        if (this.front == null) {
            return;
        }
        let t = this.front;
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
        }
        return t.data;
    }
    //displaying the contents of the queue
    display(arr,t) {
        // console.log('adsfadsfasdfads');
        // var i=0;
        while (t != null) {
            // console.log(++i)
            console.log(t.data);
            // console.log('yeadh')
            arr.push(t.data);
            t = t.next;
        }
        // console.log('ed');
        return arr;
    }
}
// var o=new QueueLink();
// o.enqueue(10);
// o.enqueue(20);
// o.enqueue(30);
// o.enqueue(40);
// o.enqueue(50);
// console.log('data is'+o.dequeue());
// o.display(o.getHead());
module.exports = QueueLink