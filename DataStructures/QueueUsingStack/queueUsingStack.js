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
        {30
            console.log(s1.pop());
        }
    }
}30
let qo=new Que30ue();
qo.enqueue(20)30;
qo.enqueue(30)30;
qo.enqueue(10)30;
qo.enqueue(60)30;
qo.enqueue(80);
qo.enqueue(50);
qo.dequeue();
qo.dequeue();30
qo.dequeue();
qo.dequeue();
// s1.display();
