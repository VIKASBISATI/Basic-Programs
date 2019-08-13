class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class QueueLink {
    QueueLink() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        let t = new Node(data);
        if (this.rear == null) {
            this.rear = t;
            this.front = t;
        }
        this.rear.next = t;
        this.rear = t;

    }
    getHead()
    {
        return this.front;
    }
    dequeue() {
        if(this.front==null)
        {
            return;
        }
        let t=this.front;
        this.front=this.front.next;
        if(this.front==null)
        {
            this.rear=null;
        }
        return t;
    }
    display(t)
    {
        while(t!=null)
        {
            console.log(t.data);
            t=t.next;
        }
    }
}
module.exports=QueueLink