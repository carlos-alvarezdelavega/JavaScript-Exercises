/* 
===== Intructions =====
Maximize Stock Trading Profit (https://www.codecademy.com/code-challenges/code-challenge-maximize-stock-trading-profit-javascript)
Given the daily values of a stock, create a function called maxProfitDays() that, 
given a list of integers, will return the index value of the two elements that represent the day 
on which one should have bought a share and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. 
You are required to buy and sell only once. You also must buy a stock before selling it.

For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. 
In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), 
the function would return [1, 4].

*/
// === Implementation ===
// Test cases


const getRandomStock = () => {
    let randomWeek = [];
    
    for(let i = 0; i < 7; i++) {
        let randomNum = Math.floor(Math.random() * 100);
        randomWeek.push(randomNum)
    } // end loop
    return randomWeek;
} // End getRandomStock

let randomStockWeek = [92, 76, 90, 64, 27, 85, 1];

function maxProfitDays(stockPrices) {
    let firstDay = stockPrices[0];
    let maxProfit = [];
    
    /*for(let i in stockPrices){
        if(stockPrices[i] < firstDay){
            maxProfit.push(i)
        }// end if statement
        
    }; End for...in loop */
    let cheapestStock = Math.min(...stockPrices)
    //
    let timeToSell = Math.max(...stockPrices);
    //console.log(timeToSell);
    maxProfit.push(stockPrices.indexOf(cheapestStock))
    maxProfit.push(stockPrices.indexOf(timeToSell))
    return maxProfit;
}


const calculateProfit = (stockPrices) => {
    let profit = 0;
    let maxProfit = [];
    let cheapestStock = Math.min(...stockPrices)
    //
    let timeToSell = Math.max(...stockPrices);
    //console.log(timeToSell);
    maxProfit.push(stockPrices.indexOf(cheapestStock))
    maxProfit.push(stockPrices.indexOf(timeToSell))
    
    if (maxProfit[0] < maxProfit[1]) {
        profit = timeToSell - cheapestStock;
    }
    
    return maxProfit;
} // End calculateProfit

console.log(calculateProfit(randomStockWeek));