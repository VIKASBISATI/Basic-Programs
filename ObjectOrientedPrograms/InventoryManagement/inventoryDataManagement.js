var input = require('readline-sync');
const fs = require('fs');
var txt = fs.readFileSync('/home/admin1/Desktop/b.txt').toString('utf-8');
var jsonText = JSON.parse(txt);
for (var kind in jsonText.Grocery) {
    for (let i = 0; i < jsonText.Grocery[kind].length; i++) {
        var name = jsonText.Grocery[kind][i].Name;
        var weight = jsonText.Grocery[kind][i].Weight;
        var price = jsonText.Grocery[kind][i].PricePerKg;
        console.log('Name is : ' + name + ' ; Weight is : ' + weight + ' ; Prices is : ' + price + ' ; Total price is : ' + price * weight);
    }
}