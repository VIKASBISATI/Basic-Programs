/******************************************************************************
* @Purpose : PrimeAnagrams
* @file : queueUsingStack.js
* @overview :Implementation of queue using stack
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
const fs = require('fs')
let stackObject = require('./stackBL');
let s1 = new stackObject(10);
let s2 = new stackObject(10);
class Queue {
    constructor() {

    }
    /*adding the elements into the first stack by copying the first stack elements into
    the second stack and again copying the second stack elements into the first stack
    that works like a queue data structure with the help of two stack*/
    enqueue(data) {
        while (!s1.isEmpty()) {
            s2.push(s1.pop());
        }
        s1.push(data);
        while (!s2.isEmpty()) {
            s1.push(s2.pop());
        }
    }
    //popping the elements from the first stack
    dequeue() {
        if (!s1.isEmpty()) {
            
            console.log(s1.pop());
        }
    }
} 
// let qo = new Queue();
// qo.enqueue(20);
// qo.enqueue(30);
// qo.enqueue(10);
// qo.enqueue(60);
// qo.enqueue(80);
// qo.enqueue(50);
// qo.dequeue();
// qo.dequeue(); 
// qo.dequeue();
// qo.dequeue();
// qo.display();
// s1.display();
