/******************************************************************************
* @Purpose : Two D Array
* @file : twoDArrayBL.js
* @overview : To read and display the two dimensional array 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
//logic to display the 2d array after reading all the values from the user
let display = (rows, cols) => {
    let row = [];
    for (let i = 0; i < rows; i++) {
        let col = [];
        for (let j = 0; j < cols; j++) {
            col.push(input.questionInt());
        }
        row.push(col);
        console.log(col[0]);
    }

    return row;
}
module.exports = { display }