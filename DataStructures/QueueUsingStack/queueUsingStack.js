let input = require('readline-sync');
const fs = require('fs')
let stackObject = require('./stackBL');
let s1=new stackObject(10);
let s2=new stackObject(10);
class Queue
{
    constructor()
    {
    
    }

    enqueue(data)
    {
        while(!s1.isEmpty())
        {
            s2.push(s1.pop());
        }
        s1.push(data);
        while(!s2.isEmpty())
        {
            s1.push(s2.pop());
        }
    }
    dequeue()
    {
        if(!s1.isEmpty())
        {
            console.log(s1.pop());
        }
    }
}
let qo=new Queue();
qo.enqueue(20);
qo.enqueue(30);
qo.enqueue(10);
qo.enqueue(60);
qo.enqueue(80);
qo.enqueue(50);
qo.dequeue();
qo.dequeue();
qo.dequeue();
qo.dequeue();
// s1.display();
