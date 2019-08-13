let sta = require('./stackBL');
let input = require('readline-sync');
class Balanced {
    balance() {
        var s = input.question('Enter the string');
        let st = new sta(s.length);
        for (let i = 0; i < s.length; i++) {
            let ch = s.charAt(i);
            if (ch == '{' || ch == '[' || ch == '(') {
                st.push(ch);
                // st.display();
            }
            else {
                // if (st.isEmpty()) {
                //     console.log('yes'+i)
                //     console.log("Not balanced");
                //     console.log(st.isEmpty());
                //     return;
                // }

                switch (ch) {
                    case '}':
                        if (st.pop() != '{') {
                            console.log("Not balanced");
                            return;
                        }
                        break;
                    case ']':
                        if (st.pop() != '[') {
                            console.log("Not balanced");
                            return;
                        }
                        break;
                    case ')':
                        if (st.pop() != '(') {
                            console.log("Not balanced");
                            return;
                        }
                        break;

                }
            }
        }
        if (st.isEmpty()) {
            console.log(" balanced");

        }
        else {
            console.log("Not balanced");
        }
    }
}
let o = new Balanced();
o.balance();