// document.getElementById('investmentForm').addEventListener('submit', function(event) {
//    event.preventDefault();

//     const amount = parseFloat(document.getElementById('amount').value);
//    const period = parseInt(document.getElementById('period').value);
//     const gains = calculateGains(amount, period); // Assuming you implement this function
//    const totalAmount = amount + gains;

//     Update results
//    document.getElementById('gains').textContent = `Gains: $${gains.toFixed(2)}`;
//    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
//    document.getElementById('forecastedAmount').textContent = `Forecasted Amount after ${period} months: $${(totalAmount).toFixed(2)}`;
//    document.getElementById('results').style.display = 'block';
// });

// Function to calculate gains//
// function calculateGains(amount, period) {
//     const baseGainMargin = 0.001; // 0.1% base gain margin
//     let gainMargin = baseGainMargin;

//     if (amount > 1000) {
//        const additionalMargin = Math.min(Math.floor(amount / 1000000) * 0.01, 1.0);
//         gainMargin = baseGainMargin + additionalMargin;
//    }

//     return amount * gainMargin * period; // Simple calculation over the period
// }
