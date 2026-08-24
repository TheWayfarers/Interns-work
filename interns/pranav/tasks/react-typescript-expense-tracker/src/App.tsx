import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import type {
    Expense,
    ExpenseCategory,
} from "./types/expense";

type FilterOption = "All" | ExpenseCategory;

function App() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [selectedFilter, setSelectedFilter] =
        useState<FilterOption>("All");

    function addExpense(
        amount: number,
        category: ExpenseCategory,
        note: string
    ) {
        const newExpense: Expense = {
            id: Date.now(),
            amount,
            category,
            note,
            date: new Date().toISOString().split("T")[0],
        };

        setExpenses((currentExpenses) => [
            ...currentExpenses,
            newExpense,
        ]);
    }

    function deleteExpense(id: number) {
        setExpenses((currentExpenses) =>
            currentExpenses.filter(
                (expense) => expense.id !== id
            )
        );
    }

    const visibleExpenses =
        selectedFilter === "All"
            ? expenses
            : expenses.filter(
                  (expense) =>
                      expense.category === selectedFilter
              );

    const totalSpent = visibleExpenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    return (
        <div className="app">

            <header className="app-header">
                <h1>Expense Tracker</h1>

                <p>
                    Track your daily spending with ease.
                </p>
            </header>

            <main>

                <ExpenseForm
                    onAddExpense={addExpense}
                />

                <section className="summary">
                    <div className="summary-item">
                        <span>Total Spent</span>
                        <strong>
                            ₹{totalSpent.toFixed(2)}
                        </strong>
                    </div>

                    <div className="summary-item">
                        <span>Entries</span>
                        <strong>
                            {visibleExpenses.length}
                        </strong>
                    </div>
                </section>

                <ExpenseFilter
                    selectedFilter={selectedFilter}
                    onFilterChange={setSelectedFilter}
                />

                <ExpenseList
                    expenses={visibleExpenses}
                    onDelete={deleteExpense}
                />

            </main>

            <footer>
                <p>
                    Pranav Manda • 2026
                </p>
            </footer>

        </div>
    );
}

export default App;