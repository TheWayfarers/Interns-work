import type { Expense } from "../types/expense";

interface ExpenseCardProps {
    expense: Expense;
    onDelete: (id: number) => void;
}

function ExpenseCard({ expense, onDelete }: ExpenseCardProps) {
    return (
        <article className="expense-card">
            <div className="expense-info">
                <div className="expense-top">
                    <strong>₹{expense.amount}</strong>

                    <span
                        className={`category-badge ${expense.category.toLowerCase()}`}
                    >
                        {expense.category}
                    </span>
                </div>

                {expense.note && (
                    <p className="expense-note">
                        {expense.note}
                    </p>
                )}

                <p className="expense-date">
                    {expense.date}
                </p>
            </div>

            <button
                className="delete-button"
                onClick={() => onDelete(expense.id)}
            >
                Delete
            </button>
        </article>
    );
}

export default ExpenseCard;
