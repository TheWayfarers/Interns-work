import { useState } from "react";
import type { ExpenseCategory } from "../types/expense";

interface ExpenseFormProps {
    onAddExpense: (
        amount: number,
        category: ExpenseCategory,
        note: string
    ) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<ExpenseCategory | "">("");
    const [note, setNote] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const numericAmount = Number(amount);

        if (!amount || numericAmount <= 0) {
            setError("Please enter an amount greater than 0.");
            return;
        }

        if (!category) {
            setError("Please select a category.");
            return;
        }

        setError("");

        onAddExpense(numericAmount, category, note.trim());

        setAmount("");
        setCategory("");
        setNote("");
    }

    return (
        <section className="expense-form-section">
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit} className="expense-form">

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    min="0"
                    step="0.01"
                    onChange={(event) => setAmount(event.target.value)}
                />

                <select
                    value={category}
                    onChange={(event) =>
                        setCategory(
                            event.target.value as ExpenseCategory | ""
                        )
                    }
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    type="text"
                    placeholder="Note"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                />

                <button type="submit">
                    Add Expense
                </button>

            </form>

            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}
        </section>
    );
}

export default ExpenseForm;
