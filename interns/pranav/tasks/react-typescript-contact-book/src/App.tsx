import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import type { Contact } from "./types/contact";

function App() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchText, setSearchText] = useState("");

    function addContact(contactData: Omit<Contact, "id">) {
        const newContact: Contact = {
            id: Date.now(),
            ...contactData,
        };

        setContacts((currentContacts) => [
            ...currentContacts,
            newContact,
        ]);
    }

    function deleteContact(id: number) {
        setContacts((currentContacts) =>
            currentContacts.filter(
                (contact) => contact.id !== id
            )
        );
    }

    const filteredContacts = contacts.filter((contact) =>
        contact.name
            .toLowerCase()
            .includes(searchText.toLowerCase().trim())
    );

    const hasSearch =
        searchText.trim().length > 0;

    return (
        <div className="app">

            <header className="app-header">
                <div>
                    <h1>Contact Book</h1>
                    <p>
                        Keep your contacts organised in one place.
                    </p>
                </div>

                <div className="contact-count">
                    <strong>{contacts.length}</strong>
                    <span>
                        {contacts.length === 1
                            ? "contact"
                            : "contacts"}
                    </span>
                </div>
            </header>

            <main>
                <ContactForm
                    onAddContact={addContact}
                />

                <SearchBar
                    searchText={searchText}
                    onSearchChange={setSearchText}
                />

                {filteredContacts.length === 0 ? (
                    <section className="contact-list-section">
                        <div className="section-heading">
                            <h2>Contacts</h2>
                            <span>0</span>
                        </div>

                        <p className="empty-state">
                            {hasSearch
                                ? "No contacts match your search."
                                : "No contacts saved yet."}
                        </p>
                    </section>
                ) : (
                    <ContactList
                        contacts={filteredContacts}
                        onDelete={deleteContact}
                    />
                )}
            </main>

            <footer>
                <p>Pranav Manda • 2026</p>
            </footer>

        </div>
    );
}

export default App;