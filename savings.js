// savings.js
document.addEventListener('DOMContentLoaded', function() {
    const savingsForm = document.getElementById('savingsForm');
    const savingsTable = document.getElementById('savingsTable').getElementsByTagName('tbody')[0];
    const totalSavingsElement = document.getElementById('totalSavings');
    
    let totalSavings = 0;

    savingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const goalName = document.getElementById('goalName').value;
        const goalAmount = parseFloat(document.getElementById('goalAmount').value);
        const amountSaved = parseFloat(document.getElementById('amountSaved').value);
        
        if (goalName && !isNaN(goalAmount) && !isNaN(amountSaved)) {
            const newRow = savingsTable.insertRow();
            newRow.innerHTML = `
                <td>${goalName}</td>
                <td>₹${goalAmount.toFixed(2)}</td>
                <td>₹${amountSaved.toFixed(2)}</td>
                <td>₹${(goalAmount - amountSaved).toFixed(2)}</td>
            `;
            
            totalSavings += amountSaved;
            totalSavingsElement.textContent = totalSavings.toFixed(2);

            savingsForm.reset();
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});
// Save total income to local storage in income.js
localStorage.setItem('totalIncome', totalIncome);

// Retrieve total income in summary.js
const totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
