class Dequeue {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        this.ar = [];
        this.ar.length=this.size;
    }
    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || this.front == this.rear + 1){
            return true;
        }
        return false;
    }
    isEmpty() {
        if (this.front == -1) {
            return true;
        }
        return false;
    }
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
    getSize()
    {
        console.log(s);
        let s=this.size;
        return s;
    }
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
        else if (this.rear == this.size-1) {
            this.rear = 0;
        }
        else {
            this.rear = this.rear + 1;
        }
        // console.log('Rear is'+this.rear);
        this.ar[this.rear] = data;
    }
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
    getFront() {
        return this.ar[this.front];
    }
    getRear() {
        return this.ar[this.rear];
    }
    display() {
        for (let i = 0; i < this.ar.length; i++) {
            console.log(this.ar[i]);
        }
    }
}
module.exports = Dequeue