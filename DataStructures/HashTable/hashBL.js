/******************************************************************************
* @Purpose : Hash
* @file : hashBL.js
* @overview : To avoid the collision of data using seperate chaining method using linked list
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
var input = require('readline-sync');
//creating the node with data and next pointing to null
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Hash {
    constructor(l) {
        this.table = [];
        this.table.length = l;
        this.size = 0;
    }
    /*pos method is used to return the index of the value by using mod operator i.e, 77%11=0
    here 0 is the index position*/
    pos(x, s) {
        var rem = x % s;
        return rem;
    }
    //insert method is used to insert the data at particular index returned by pos method
    insert(value) {
        this.size++;
        var ne = new Node(value);
        var index = this.pos(value, this.table.length);
        console.log(index);
        var du = this.table[index];
        //inserting the first node at particular table index in the table
        if (this.table[index] == null) {
            this.table[index] = ne;
            return true;
        }
        else {
            /*if the particular table index have one element then the new node should be 
            placed at the end so here insertion is done at the end*/
            while (du.next != null) {
                du = du.next;
            }
            du.next = ne;
            return true;
        }
    }
    //displaying the table elements by index wise
    dis() {

        for (let i = 0; i < this.table.length; i++) {
            let st = 'Indext ' + i + '  : ';
            var b = this.table[i];
            let c = 0;
            while (b != null) {
                if (c == 0) {
                    st = st + '-->';
                    c = 1;
                }
                st = st + b.data;
                if (b.next != null)
                    st = st + '-->';

                b = b.next;
            }
            console.log(st);
        }
    }
    //getSize method is used for getting the no of elements in the table
    getSize() {
        return this.size;
    }
}
module.exports = Hash;