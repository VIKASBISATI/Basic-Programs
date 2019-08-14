class Dequeue {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        this.ar = [];
    }
    isFull() {
        if (this.front == 0 && this.rear == this.size - 1) {
            return true;
        }
        else if (this.front == this.rear + 1) {
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
            console.log('Dequeue Oversflow');
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
    insertRear(data) {
        if (this.isFull()) {
            console.log('Dequeue Oversflow');
            return;
        }
        if (this.front == -1 && this.rear == -1) {
            this.front = 0;
            this.rear = 0;
        }
        if (this.rear == this.size - 1) {
            this.rear = 0;
        }
        else {
            this.rear = this.rear + 1;
        }
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
    getFront()
    {
        return this.ar[this.front];
    }
    getRear()
    {
        return this.ar[this.rear];
    }
    display() {
        for (let i = 0; let ob = new Dequeue(10);
        ob.insertFront(10);
        ob.insertRear(15);
        ob.insertFront(12);
        ob.deleteFront();
        ob.deleteFront();
        console.log('sldjf'+ob.getFront());
        
        console.log('sldjf'+ob.getFront());
        ob.deleteRear();
        ob.display();i < this.ar.length; i++) {
            console.log(this.ar[i]);
        }
    }
}
module.exports=Dequeue