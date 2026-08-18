export type ExpenseCategory = "Food" | "Travel" | "Shopping" | "Other";

export interface Expense {
    id: number;
    amount: number;
    category: ExpenseCategory;
    note: string;
    date: string;
}
