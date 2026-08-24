interface SearchBarProps {
    searchText: string;
    onSearchChange: (value: string) => void;
}

function SearchBar({
    searchText,
    onSearchChange,
}: SearchBarProps) {
    return (
        <section className="search-section">
            <label htmlFor="contact-search">
                Search Contacts
            </label>

            <input
                id="contact-search"
                type="search"
                placeholder="Search by name..."
                value={searchText}
                onChange={(event) =>
                    onSearchChange(event.target.value)
                }
            />
        </section>
    );
}

export default SearchBar;
