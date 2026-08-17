import { useState } from "react";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("All");

    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [note, setNote] = useState("");

    const categories = ["All", "Food", "Travel", "Shopping", "Other"];

    function addExpense(event) {
        event.preventDefault();

        if (amount <= 0) {
            alert("Enter a valid amount.");
            return;
        }

        if (category === "") {
            alert("Select a category.");
            return;
        }

        const today = new Date().toISOString().split("T")[0];

        const newExpense = {
            id: Date.now(),
            amount: Number(amount),
            category: category,
            note: note,
            date: today
        };

        setExpenses([...expenses, newExpense]);

        setAmount("");
        setCategory("");
        setNote("");
    }

    function deleteExpense(id) {
        const updatedExpenses = expenses.filter(function (expense) {
            return expense.id !== id;
        });

        setExpenses(updatedExpenses);
    }

    function changeFilter(categoryName) {
        setCurrentFilter(categoryName);
    }

    const filteredExpenses = expenses.filter(function (expense) {
        return (
            currentFilter === "All" ||
            expense.category === currentFilter
        );
    });

    let total = 0;

    filteredExpenses.forEach(function (expense) {
        total += expense.amount;
    });

    const totalEntries = filteredExpenses.length;

    return (
        <>
            <header>
                <h1>Expense Tracker</h1>
                <p>
                    Track your daily expenses and manage your spending easily.
                </p>
            </header>

            <main className="container">

                {/* Add New Expense */}

                <section className="card">
                    <h2>Add New Expense</h2>

                    <form onSubmit={addExpense}>

                        <div className="form">

                            <div className="input-box">
                                <label htmlFor="amount">
                                    Amount (₹)
                                </label>

                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="Enter amount"
                                    min="1"
                                    value={amount}
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                            </div>

                            <div className="input-box">
                                <label htmlFor="category">
                                    Category
                                </label>

                                <select
                                    id="category"
                                    value={category}
                                    onChange={(event) =>
                                        setCategory(event.target.value)
                                    }
                                >
                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="Food">
                                        Food
                                    </option>

                                    <option value="Travel">
                                        Travel
                                    </option>

                                    <option value="Shopping">
                                        Shopping
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label htmlFor="note">
                                    Note
                                </label>

                                <input
                                    type="text"
                                    id="note"
                                    placeholder="Enter note"
                                    value={note}
                                    onChange={(event) =>
                                        setNote(event.target.value)
                                    }
                                />
                            </div>

                        </div>

                        <button type="submit" id="submit-btn">
                            Add Expense
                        </button>

                    </form>
                </section>


                {/* Summary */}

                <section className="summary">

                    <div className="summary-card">
                        <h3>Total Spent</h3>
                        <p>₹{total}</p>
                    </div>

                    <div className="summary-card">
                        <h3>Total Entries</h3>
                        <p>{totalEntries}</p>
                    </div>

                </section>


                {/* Filter Expenses */}

                <section className="card">

                    <h2>Filter Expenses</h2>

                    <div className="filters">

                        {categories.map(function (categoryName) {
                            return (
                                <button
                                    key={categoryName}
                                    type="button"
                                    className={
                                        currentFilter === categoryName
                                            ? "filter-btn active"
                                            : "filter-btn"
                                    }
                                    onClick={() =>
                                        changeFilter(categoryName)
                                    }
                                >
                                    {categoryName}
                                </button>
                            );
                        })}

                    </div>

                </section>


                {/* Expense List */}

                <section className="card">

                    <h2>Your Expenses</h2>

                    <div id="expenseList">

                        {filteredExpenses.length === 0 ? (
                            <div id="emptyState">
                                <h3>No expenses yet.</h3>
                                <p>Add your first one above.</p>
                            </div>
                        ) : (
                            filteredExpenses.map(function (expense) {

                                const badge =
                                    expense.category.toLowerCase();

                                return (
                                    <div
                                        className="expense-card"
                                        key={expense.id}
                                    >

                                        <div className="expense-info">

                                            <h3>
                                                ₹{expense.amount}
                                            </h3>

                                            <p>
                                                {expense.note || "No Note"}
                                            </p>

                                            <span
                                                className={`badge ${badge}`}
                                            >
                                                {expense.category}
                                            </span>

                                            <span className="date">
                                                {expense.date}
                                            </span>

                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                deleteExpense(expense.id)
                                            }
                                        >
                                            Remove
                                        </button>

                                    </div>
                                );
                            })
                        )}

                    </div>

                </section>

            </main>

            <footer>
                <p>
                    Created by Varshitha | 04 August 2026
                </p>
            </footer>
        </>
    );
}

export default App;