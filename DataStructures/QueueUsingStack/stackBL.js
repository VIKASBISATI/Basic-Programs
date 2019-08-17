/******************************************************************************
* @Purpose : Balanced
* @file : stackBL.js
* @overview : To find the given expression is balanced or not
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
//stack implementation using array which works on the priciple of last in first out(LIFO)
class Stack {
    constructor(size) {
        this.size = size;
        this.st = [];
        this.top = -1;
    }
    //pushing the data into the stack array 
    push(data) {
        //checking for the condition whether the stack is full or not
        if (!this.isFull()) {
            this.st[++this.top] = data;
        }
        return true;
    }
    //method for chekcing the stack overflow
    isFull() {
        if (this.top == this.size - 1) {
            return true;
        }
        return false;
    }
    /*deleting the data in LIFO manner and before deleting there is a need to check 
    for underflow condition*/
    pop() {
        if (!this.isEmpty()) {
            let data = this.st[this.top--];
            return data;
        }
        return "No elements or stack underflow"
    }
    //method for checking stack underflow
    isEmpty() {
        if (this.top == -1) {
            return true;
        }
        return false;
    }
    //Peek method is used to return the top of stack
    peek() {
        return this.st[this.top];
    }
    //Display method is used for displaying the contents of the stack
    display() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.st[i]);
        }

    }
}
module.exports = Stack;