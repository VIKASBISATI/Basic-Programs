var input = require('readline-sync');
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
    pos(x, s) {
        var rem = x % s;
        return rem;
    }
    insert(value) {
        this.size++;
        var ne = new Node(value);
        var index = this.pos(value, this.table.length);
        console.log(index);
        var du = this.table[index];
        if (this.table[index] == null) {
            this.table[index] = ne;
            return true;
        }
        else {
            while (du.next != null) {
                du = du.next;
            }
            du.next = ne;
            return true;
        }
    }
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
    getSize() {
        return this.size;
    }
}
var si = input.questionInt('Enter the size of the Hash Table');
var ha = new Hash(si + 1);
ha.insert(77);
ha.insert(44);
ha.insert(55);
ha.insert(26);
ha.insert(93);
ha.insert(17);
ha.insert(31);
ha.insert(54);
ha.insert(20);
// console.log('Size is ' + ha.getSize());
ha.dis();