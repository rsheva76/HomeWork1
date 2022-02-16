"use strict"

const APPLE = 15.678
const ORANGE = 123.965
const TOMATO = 90.2345

// exercise_1
const INT_MAX = Math.max(APPLE, ORANGE, TOMATO)

// exercise_2
const INT_MIN = Math.min(APPLE, ORANGE, TOMATO)

// exercise_3
const INT_SUM = APPLE + ORANGE + TOMATO

// exercise_4
const SUM_WITHOUT_FRACTIONS =
   Math.floor(APPLE) +
   Math.floor(ORANGE) +
   Math.floor(TOMATO)

// exercise_5
const SUM_ROUNDED_HUNDREDS = Math.round(SUM_WITHOUT_FRACTIONS / 100) * 100

// exercise_6
const EVEN_NUMBER_SUM = SUM_WITHOUT_FRACTIONS % 2 === 0

// exercise_7
const CHANGE = 500 - INT_SUM

// exercise_8
const AVERAGE_PRICE = (INT_SUM / 3).toFixed(2)

// exercise_9
const RANDOM_DISCOUNT = Math.round(Math.random() * 100)

// exercise_10
const SUM_WITH_DISCOUNT = +(INT_SUM - (INT_SUM * RANDOM_DISCOUNT / 100)).toFixed(2)

// exercise_11
const NET_PROFIT = (INT_SUM / 2 - INT_SUM * RANDOM_DISCOUNT / 100).toFixed(2)



// outputting data to a page
document.getElementById("int_max").innerHTML = INT_MAX;
document.getElementById("int_min").innerHTML = INT_MIN;
document.getElementById("int_sum").innerHTML = INT_SUM;
document.getElementById("sumWithoutFractions").innerHTML = SUM_WITHOUT_FRACTIONS;
document.getElementById("sumRoundedHundreds").innerHTML = SUM_ROUNDED_HUNDREDS;
document.getElementById("evenNumberSum").innerHTML = EVEN_NUMBER_SUM;
document.getElementById("change").innerHTML = CHANGE;
document.getElementById("averagePrice").innerHTML = AVERAGE_PRICE;
document.getElementById("randomDiscount").innerHTML = RANDOM_DISCOUNT;
document.getElementById("sumWithDiscount").innerHTML = SUM_WITH_DISCOUNT;
document.getElementById("netProfit").innerHTML = NET_PROFIT;
