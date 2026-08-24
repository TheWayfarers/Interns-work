import type { Expense } from "../types/expense";
import ExpenseCard from "./ExpenseCard";

interface ExpenseListProps {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
    return (
        <section className="expense-list-section">
            <h2>Expenses</h2>

            {expenses.length === 0 ? (
                <p className="empty-state">
                    No expenses yet. Add your first one above.
                </p>
            ) : (
                <div className="expense-list">
                    {expenses.map((expense) => (
                        <ExpenseCard
                            key={expense.id}
                            expense={expense}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ExpenseList;
