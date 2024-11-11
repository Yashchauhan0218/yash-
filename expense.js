// expense.js
document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    const totalExpensesElement = document.getElementById('totalExpenses');
    
    let totalExpenses = 0;

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const source = document.getElementById('expense-source').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const date = document.getElementById('expense-date').value;
        
        if (source && !isNaN(amount) && date) {
            const newRow = expenseTable.insertRow();
            newRow.innerHTML = `
                <td>${source}</td>
                <td>₹${amount.toFixed(2)}</td>
                <td>${new Date(date).toLocaleDateString()}</td>
            `;
            
            totalExpenses += amount;
            totalExpensesElement.textContent = totalExpenses.toFixed(2);

            expenseForm.reset();
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});
// Save total income to local storage in income.js
localStorage.setItem('totalIncome', totalIncome);

// Retrieve total income in summary.js
const totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
