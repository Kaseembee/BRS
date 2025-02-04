document.getElementById('reconciliation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the bank and book balances
    const bankBalance = parseFloat(document.getElementById('bankBalance').value);
    const bookBalance = parseFloat(document.getElementById('bookBalance').value);

    // Get and parse the transactions input
    const transactions = document.getElementById('transactions').value.split(',').map(transaction => parseFloat(transaction.trim()));

    // Calculate the adjusted balances
    let adjustedBankBalance = bankBalance + transactions.reduce((acc, transaction) => acc + transaction, 0);
    let adjustedBookBalance = bookBalance + transactions.reduce((acc, transaction) => acc + transaction, 0);

    // Calculate the discrepancy
    let discrepancy = adjustedBankBalance - adjustedBookBalance;

    // Display the results
    document.getElementById('bankResult').children[0].textContent = adjustedBankBalance.toFixed(2);
    document.getElementById('bookResult').children[0].textContent = adjustedBookBalance.toFixed(2);
    document.getElementById('discrepancy').children[0].textContent = discrepancy.toFixed(2);

    // Show the result section
    document.getElementById('result').style.display = 'block';
});