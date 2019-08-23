var input = require('readline-sync');
const fs = require('fs');
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/InventoryManagementPrgram/inventoryManagement.json');
var arr = JSON.parse(content);
console.log( arr.Grocery['Rice'][0].Name);
var gr = {
    'Name': 'mariegold',
    'Weight': '15',
    'PricePerKg': '10'
}
arr.Grocery.push(gr.Biscuit);
arr.push( {
    'Name': 'mariegold',
    'Weight': '15',
    'PricePerKg': '10'
});
console.log(arr)