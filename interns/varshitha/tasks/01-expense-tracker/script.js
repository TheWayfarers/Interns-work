let expenses = [];
let currentFilter = "All";

const form = document.getElementById("expenseForm");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const note = document.getElementById("note");

const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
const totalEntries = document.getElementById("totalEntries");

const filterButtons = document.querySelectorAll(".filter-btn");

form.addEventListener("submit", addExpense);

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        currentFilter = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayExpenses();
    });
});

function addExpense(event) {

    event.preventDefault();

    if (amount.value <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    if (category.value === "") {
        alert("Select a category.");
        return;
    }

    let today = new Date().toISOString().split("T")[0];

    expenses.push({
        id: Date.now(),
        amount: Number(amount.value),
        category: category.value,
        note: note.value,
        date: today
    });

    form.reset();

    displayExpenses();
}

function displayExpenses() {

    expenseList.innerHTML = "";

    let total = 0;
    let count = 0;

    expenses.forEach(function (expense) {

        if (currentFilter === "All" || expense.category === currentFilter) {

            total += expense.amount;
            count++;

            let badge = expense.category.toLowerCase();

            expenseList.innerHTML += `
                <div class="expense-card">

                    <div class="expense-info">
                        <h3>₹${expense.amount}</h3>
                        <p>${expense.note || "No Note"}</p>

                        <span class="badge ${badge}">
                            ${expense.category}
                        </span>

                        <span class="date">${expense.date}</span>
                    </div>

                    <button class="remove-btn"
                    onclick="deleteExpense(${expense.id})">
                    Remove
                    </button>

                </div>
            `;
        }
    });

    if (count === 0) {

        expenseList.innerHTML = `
            <div id="emptyState">
                <h3>No expenses yet.</h3>
                <p>Add your first one above.</p>
            </div>
        `;
    }

    totalAmount.textContent = "₹" + total;
    totalEntries.textContent = count;
}

function deleteExpense(id) {

    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    displayExpenses();
}

displayExpenses();