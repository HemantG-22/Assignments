//Declear array to store the values

const prices : number [] = [7, 1, 5, 3, 6, 4];
let maxprofit : number = 0;

//Day to buy or sell
let buyday : number = 0;
let sellday : number = 0;

//loop to pickup Price fo the day 
for(let i: number = 0; i < prices.length-1; i++)
{
    //inner loop
    for(let j: number = i + 1; j < prices.length; j++)
    {
        const profit : number = prices[j]! - prices[i]!;

        //Profit is greate than maximum profit
        if (profit > maxprofit)
        {
            maxprofit = profit;

            //Update days
            buyday = i + 1;
            sellday = j + 1;
        }
    }
}
if (maxprofit > 0)
{
    console.log(`Maximum Profit: ${maxprofit}`);
    console.log(`Buy on Day ${buyday} (Price = ${prices[buyday - 1]})`);
    console.log(`Sell on Day ${sellday} (Price = ${prices[sellday - 1]})`);
} else 
{
    console.log("Maximum Profit: 0");
    console.log("No profit can be achieved.");
}

