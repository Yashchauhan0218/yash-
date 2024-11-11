// income.js
document.addEventListener('DOMContentLoaded', function() {
    const incomeForm = document.getElementById('incomeForm');
    const incomeTable = document.getElementById('incomeTable').getElementsByTagName('tbody')[0];
    const totalIncomeElement = document.getElementById('totalIncome');
    
    let totalIncome = 0;

    incomeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const source = document.getElementById('income-source').value;
        const amount = parseFloat(document.getElementById('income-amount').value);
        const date = document.getElementById('income-date').value;
        
        if (source && !isNaN(amount) && date) {
            const newRow = incomeTable.insertRow();
            newRow.innerHTML = `
                <td>${source}</td>
                <td>₹${amount.toFixed(2)}</td>
                <td>${new Date(date).toLocaleDateString()}</td>
            `;
            
            totalIncome += amount;
            totalIncomeElement.textContent = totalIncome.toFixed(2);

            incomeForm.reset();
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});
// Save total income to local storage in income.js
localStorage.setItem('totalIncome', totalIncome);

// Retrieve total income in summary.js
const totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
