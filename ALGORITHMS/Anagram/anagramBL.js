/******************************************************************************
* @Purpose : Anagrams
* @file : anagramBL.js
* @overview : To find the anagrams of two string
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let isAnagram = (s1, s2) => {
    //converting the string into array
    let str1 = Array.from(s1);
    let str2 = Array.from(s2);
    // if the length of the two string arrays are not equal then the two strings are not anagrams
    if (str1.length != str2.length) {
        return false;
    }
    //sorting the two arrays using the method sort()
    str1 = str1.sort();
    str2 = str2.sort();
    console.log(str1);
    console.log(str2);
    // checking the equality of the strings index wise if they are equal returning true else false
    for (let i = 0; i < str1.length; i++) {
        if (str1[i]!=str2[i]) {
            return false;
        }
    }
    return true;
}
module.exports = { isAnagram }