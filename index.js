"use strict"

const apple = 15.678, orange = 123.965, tomato = 90.2345;
const int_max = Math.max(apple, orange, tomato);
const int_min = Math.min(apple, orange, tomato);
const int_sum = apple + orange + tomato;
const sumWithoutFractions = Math.floor(apple) + Math.floor(orange) + Math.floor(tomato);
const sumRoundedHundreds = Math.round(apple / 100) * 100 + Math.round(orange / 100) * 100 + Math.round(tomato / 100) * 100;
const evenNumberSum = sumWithoutFractions % 2 === 0;
const change = 500 - int_sum;
const averagePrice = int_sum / 3;
const randomDiscount = Math.round(Math.random() * 100);
const sumWithDiscount = +(int_sum - (int_sum * randomDiscount / 100)).toFixed(2);
const netProfit = int_sum / 2 - int_sum * randomDiscount / 100;

document.getElementById("int_max").innerHTML = int_max;
document.getElementById("int_min").innerHTML = int_min;
document.getElementById("int_sum").innerHTML = int_sum;
document.getElementById("sumWithoutFractions").innerHTML = sumWithoutFractions;
document.getElementById("sumRoundedHundreds").innerHTML = sumRoundedHundreds;
document.getElementById("evenNumberSum").innerHTML = evenNumberSum;
document.getElementById("change").innerHTML = change;
document.getElementById("averagePrice").innerHTML = averagePrice.toFixed(2);
document.getElementById("randomDiscount").innerHTML = randomDiscount;
document.getElementById("sumWithDiscount").innerHTML = sumWithDiscount;
document.getElementById("netProfit").innerHTML = netProfit.toFixed(2);