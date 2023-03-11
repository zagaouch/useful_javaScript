// Define a function to calculate the tip and total amount
function calculateTip(total, tipPercentage) {
//   // Calculate the tip amount by multiplying the total by the tip percentage
     const tipAmount = total * tipPercentage;
	//       // Calculate the total amount by adding the tip amount to the total
     const totalAmount = total + tipAmount;
//           // Return an object containing the tip and total amounts
     return { tip: tipAmount, total: totalAmount };
             }

//             // Define the initial values for the bill total and tip percentage
             const billTotal = 50.00;
             const tipPercentage = 0.20;
//
//             // Use the calculateTip function to calculate the tip and total amounts
             const tipAndTotal = calculateTip(billTotal, tipPercentage);
//
//             // Log the results to the console with formatted string output
             console.log(`The tip amount is $${tipAndTotal.tip.toFixed(2)}, and the total amount is $${tipAndTotal.total.toFixed(2)}.`);

