import type { ExpenseCategory } from "../types/expense";

type FilterOption = "All" | ExpenseCategory;

interface ExpenseFilterProps {
    selectedFilter: FilterOption;
    onFilterChange: (filter: FilterOption) => void;
}

const filters: FilterOption[] = [
    "All",
    "Food",
    "Travel",
    "Shopping",
    "Other",
];

function ExpenseFilter({
    selectedFilter,
    onFilterChange,
}: ExpenseFilterProps) {
    return (
        <section className="expense-filter">
            <h2>Filter Expenses</h2>

            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={
                            selectedFilter === filter
                                ? "filter-button active"
                                : "filter-button"
                        }
                        onClick={() => onFilterChange(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default ExpenseFilter;
