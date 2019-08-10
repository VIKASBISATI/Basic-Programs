/******************************************************************************
* @Purpose : To find percentage of wins and loss given the stake and number of attempts
* @file : gamblerBL.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let gamblerCalculation = (stake, goal, num) => {
    let [wins, bets] = [0, 0];
    for (let i = 0; i < num; i++) {
        let temp = stake;
        while (temp > 0 && temp < goal) {
            //if the random number generated is less than 0.5 then the stake is going to be
            //reduced by 1 else stake increased by 1 if the stake reaches to goal then
            // the player is going to win else the player going to lose 
            bets++;
            if (Math.random() < 0.5) {
                temp++;
            }
            else {
                temp--;
            }
        }
        if (temp == goal) {
            wins++;
        }
    }
    return wins;
}
module.exports = { gamblerCalculation }