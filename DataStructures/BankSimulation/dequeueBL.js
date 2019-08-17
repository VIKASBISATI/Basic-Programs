/******************************************************************************
* @Purpose : BankSimulation
* @file : dequeueBL.js
* @overview : To perform the bank operation using Dequeue data structure
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
/*Dequeue is a special type of queue where insertion and deletion happens at both the end
of the queue array*/
class Dequeue {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        this.ar = [];
        this.ar.length = this.size;
    }
    //Method for checking the queue overflow
    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || this.front == this.rear + 1) {
            return true;
        }
        return false;
    }
    //Method for checking the queue underflow
    isEmpty() {
        if (this.front == -1) {
            return true;
        }
        return false;
    }
    //inserfront used to insert data at the front 
    insertFront(data) {

        if (this.isFull()) {
            console.log('Dequeue Overflow');
            return;
        }
        if (this.front == -1 && this.rear == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.size - 1;
        }
        else {
            this.front = this.front - 1;
        }
        this.ar[this.front] = data;

    }
    //getSize method is used for getting the size of dequeue
    getSize() {
        console.log(s);
        let s = this.size;
        return s;
    }
    /*inserting the data in sequential manner when it reaches to the end then the rear pointer 
    should point to the zeroth index*/
    insertRear(data) {
        // console.log('rear at beg'+this.rear);
        // console.log('front at beg'+this.rear);
        if (this.isFull()) {
            console.log('Dequeue Overflow');
            return;
        }
        if (this.front == -1 && this.rear == -1) {
            // console.log('Entered')
            this.front = 0;
            this.rear = 0;
        }
        else if (this.rear == this.size - 1) {
            this.rear = 0;
        }
        else {
            this.rear = this.rear + 1;
        }
        // console.log('Rear is'+this.rear);
        this.ar[this.rear] = data;
    }
    /*deleting the data at the front prior to that dequeue underflow condition need to be 
    checked*/
    deleteFront() {
        if (this.isEmpty()) {
            console.log('Dequeue underflow');
            return;
        }
        if (this.front == 0 && this.rear == 0) {
            this.front = -1;
            this.rear = -1;
        }
        else {
            if (this.front == this.size - 1) {
                this.front = 0;
            }
            else {
                this.front = this.front + 1;
            }
        }
        console.log(this.front);
    }
    /*deleting the data at the rear prior to that dequeue underflow condition need to be 
   checked*/
    deleteRear() {
        if (this.isEmpty()) {
            console.log('Dequeue underflow');
            return;
        }
        if (this.front == 0 && this.rear == 0) {
            this.front = -1;
            this.rear = -1;
        }
        if (this.rear == 0) {
            this.rear = this.size - 1;
        }
        else {
            this.rear = this.rear - 1;
        }
    }
    //get front is used to get the element present at front index
    getFront() {
        return this.ar[this.front];
    }
    //get front is used to get the element present at rear index
    getRear() {
        return this.ar[this.rear];
    }
    //displaying the data in dequeue
    display() {
        for (let i = 0; i < this.ar.length; i++) {
            console.log(this.ar[i]);
        }
    }
}
module.exports = Dequeue