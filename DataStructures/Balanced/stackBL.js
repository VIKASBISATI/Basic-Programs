class Stack {
    constructor(size) {
        this.size = size;
        this.st = [];
        this.top = -1;
    }
    push(data) {
        if (!this.isFull()) {
            this.st[++this.top] = data;
        }
        return true;
    }
    isFull() {
        if (this.top == this.size - 1) {
            return true;
        }
        return false;
    }
    pop() {
        if (!this.isEmpty()) {
            let data = this.st[this.top--];
            return data;
        }
        return "No elements or stack underflow"
    }
    isEmpty() {
        if (this.top == -1) {
            return true;
        }
        return false;
    }
    peek() {
        return this.st[this.top];
    }
    display() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.st[i]);
        }
    }
}
module.exports = Stack;