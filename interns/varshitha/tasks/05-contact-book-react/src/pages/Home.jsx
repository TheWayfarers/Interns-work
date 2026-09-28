import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import useContacts from "../hooks/useContacts";

import ContactCard from "../components/ContactCard";

function Home() {

    const {
        contacts,
        loading,
        error,
        deleteContact
    } = useContacts();

    const [searchText, setSearchText] = useState("");

    const filteredContacts = useMemo(() => {

        return contacts
            .filter((contact) =>
                contact.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            )
            .sort((a, b) =>
                a.name.localeCompare(b.name)
            );

    }, [contacts, searchText]);

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to remove this contact?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteContact(id);

        } catch (error) {

            alert(error.message);

        }
    }

    if (loading) {
        return (
            <div className="app">
                <main>
                    <section className="card">
                        <h2>Loading contacts...</h2>
                    </section>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app">
                <main>
                    <section className="card">
                        <h2>{error}</h2>
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="app">

            <header>
                <h1>Contact Book</h1>
                <p>Save and manage your contacts</p>
            </header>

            <main>

                <section className="card">

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchText}
                            onChange={(event) =>
                                setSearchText(event.target.value)
                            }
                        />

                        <Link
                            to="/add"
                            className="add-link"
                        >
                            Add Contact
                        </Link>

                    </div>

                </section>

                <section className="card">

                    <h2>Your Contacts</h2>

                    {filteredContacts.length === 0 ? (

                        <div id="emptyState">
                            <h3>No contacts found.</h3>
                        </div>

                    ) : (

                        filteredContacts.map((contact) => (

                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onDelete={handleDelete}
                            />

                        ))

                    )}

                </section>

            </main>

        </div>
    );
}

export default Home;