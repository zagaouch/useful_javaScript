Calculate Tip

This is a simple JavaScript script that calculates the tip and total amount for a bill based on the bill total and tip percentage.

#Usage

To use this script, you can call the calculateTip() function, passing in the bill total and tip percentage as arguments. The function will return an object containing the tip and total amounts.
const billTotal = 50.00;
const tipPercentage = 0.20;

const tipAndTotal = calculateTip(billTotal, tipPercentage);

console.log(`The tip amount is $${tipAndTotal.tip.toFixed(2)}, and the total amount is $${tipAndTotal.total.toFixed(2)}.`);


The above example calculates the tip and total amounts for a $50.00 bill with a 20% tip, and logs the results to the console.

#Function

The calculateTip() function takes two arguments:

total (number) - The total bill amount
tipPercentage (number) - The tip percentage, expressed as a decimal (e.g. 0.20 for 20%)
The function calculates the tip amount by multiplying the total by the tip percentage, and calculates the total amount by adding the tip amount to the total. It then returns an object containing the tip and total amounts.

