/******************************************************************************
* @Purpose : Balanced
* @file : balanced.js
* @overview : To find the given expression is balanced or not
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
var sta = require('./stackBL');
var input = require('readline-sync');
class Balanced {
    balance() {
        /*reading the string from the user to check whether the provided string is 
        balanced or not*/
        var s = input.question('Enter the string');
        var st = new sta(s.length);
        for (let i = 0; i < s.length; i++) {
            let ch = s.charAt(i);
            /*whenever we encounter the open paranthesis,brackets and braces 
            we need to push into stack*/
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


                /*checking for the closed braces,paranthesis and brackets when it occurs
                then we have to check for the respective braces paranthesis and brackets
                by popping the element from the stack*/
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
        /*Finally checking whether stack is empty or not if empty then the string is balanced
        otherwise not a balanced expression*/
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