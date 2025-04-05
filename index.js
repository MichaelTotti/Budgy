let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
  const list = document.getElementById("transaction-list");
  list.innerHTML = "";

  let income = 0;
  let expenses = 0;

  transactions.forEach(tx => {
    const li = document.createElement("li");
    li.textContent = `${tx.description}: $${tx.amount}`;
    list.appendChild(li);

    if (tx.amount >= 0) income += tx.amount;
    else expenses += tx.amount;
  });

  document.getElementById("income").textContent = `$${income}`;
  document.getElementById("expenses").textContent = `$${Math.abs(expenses)}`;
  document.getElementById("balance").textContent = `$${income + expenses}`;
}

document.addEventListener("DOMContentLoaded", updateUI);

/* js/add.js */
document.getElementById("transaction-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const newTransaction = {
    id: Date.now(),
    description,
    amount
  };

  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  window.location.href = "index.html";
});