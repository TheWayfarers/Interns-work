let expenses = [];
let currentFilter = "All";

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
const totalEntries = document.getElementById("totalEntries");

expenseForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const note = document.getElementById("note").value.trim();

    if (amount <= 0 || category === "") {
        alert("Please enter a valid amount and select a category.");
        return;
    }

    const expense = {
        id: Date.now(),
        amount,
        category,
        note,
        date: new Date().toISOString().split("T")[0]
    };

    expenses.push(expense);

    expenseForm.reset();

    renderExpenses();

});

function renderExpenses() {

    let visibleExpenses = expenses;

    if (currentFilter !== "All") {

        visibleExpenses = expenses.filter(expense =>
            expense.category === currentFilter
        );

    }

    expenseList.innerHTML = "";

    if (visibleExpenses.length === 0) {

        expenseList.innerHTML =
            `<p class="empty">No expenses yet. Add your first one above.</p>`;

    } else {

        visibleExpenses.forEach(expense => {

            const card = document.createElement("div");

            card.className = "expense-card";

            card.innerHTML = `
                <div class="expense-info">
                    <h3>₹${expense.amount}</h3>

                    <p>
                        <span class="badge ${expense.category.toLowerCase()}">
                            ${expense.category}
                        </span>
                        ${expense.note}
                    </p>

                    <small>${expense.date}</small>
                </div>

                <button
                    class="delete-btn"
                    onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            `;

            expenseList.appendChild(card);

        });

    }

    totalAmount.textContent =
        "₹" +
        visibleExpenses.reduce((sum, expense) =>
            sum + expense.amount, 0);

    totalEntries.textContent = visibleExpenses.length;

}

function deleteExpense(id) {

    expenses = expenses.filter(expense =>
        expense.id !== id
    );

    renderExpenses();

}

document.querySelectorAll(".filters button")
.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        renderExpenses();

    });

});

renderExpenses();