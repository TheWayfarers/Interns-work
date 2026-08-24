import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [searchText, setSearchText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(function () {
        const savedContacts = localStorage.getItem("contacts");

        if (savedContacts) {
            setContacts(JSON.parse(savedContacts));
            setLoading(false);
        } else {
            getContacts();
        }
    }, []);

    useEffect(function () {
        if (!loading) {
            localStorage.setItem(
                "contacts",
                JSON.stringify(contacts)
            );
        }
    }, [contacts, loading]);

    async function getContacts() {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Unable to get contacts");
            }

            const data = await response.json();

            const apiContacts = data.map(function (user) {
                const phoneNumber = user.phone
                    .replace(/\D/g, "")
                    .slice(0, 10);

                return {
                    id: user.id,
                    name: user.name,
                    phone: phoneNumber,
                    email: user.email
                };
            });

            setContacts(apiContacts);
        } catch (error) {
            setError("Unable to load contacts from API.");
        } finally {
            setLoading(false);
        }
    }

    function saveContact(event) {
        event.preventDefault();

        const newName = name.trim();
        const newPhone = phone.trim();
        const newEmail = email.trim();

        if (newName === "") {
            alert("Please enter name");
            return;
        }

        if (
            newPhone.length !== 10 ||
            isNaN(newPhone)
        ) {
            alert("Enter a valid 10-digit phone number");
            return;
        }

        if (!newEmail.includes("@")) {
            alert("Please enter a valid email");
            return;
        }

        if (editingId === null) {
            const newContact = {
                id: Date.now(),
                name: newName,
                phone: newPhone,
                email: newEmail
            };

            setContacts([...contacts, newContact]);
        } else {
            const updatedContacts = contacts.map(function (contact) {
                if (contact.id === editingId) {
                    return {
                        id: editingId,
                        name: newName,
                        phone: newPhone,
                        email: newEmail
                    };
                }

                return contact;
            });

            setContacts(updatedContacts);
            setEditingId(null);
        }

        clearForm();
    }

    function clearForm() {
        setName("");
        setPhone("");
        setEmail("");
    }

    function editContact(id) {
        const contact = contacts.find(function (contact) {
            return contact.id === id;
        });

        if (!contact) {
            return;
        }

        setName(contact.name);
        setPhone(contact.phone);
        setEmail(contact.email);
        setEditingId(id);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function deleteContact(id) {
        const updatedContacts = contacts.filter(function (contact) {
            return contact.id !== id;
        });

        setContacts(updatedContacts);

        if (editingId === id) {
            setEditingId(null);
            clearForm();
        }
    }

    function sortContacts() {
        const sortedContacts = [...contacts].sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

        setContacts(sortedContacts);
    }

    const filteredContacts = contacts.filter(function (contact) {
        return contact.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
    });

    return (
        <div className="container">

            <header>
                <h1>📒 Contact Book</h1>
                <p>{contacts.length} Contacts</p>
            </header>

            <section className="card">

                <h2>
                    {editingId === null
                        ? "Add New Contact"
                        : "Edit Contact"}
                </h2>

                <form onSubmit={saveContact}>

                    <div className="form-group">

                        <div className="input-box">
                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={function (event) {
                                    setName(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="phone">
                                Phone
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter 10-digit phone number"
                                maxLength="10"
                                value={phone}
                                onChange={function (event) {
                                    setPhone(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={function (event) {
                                    setEmail(event.target.value);
                                }}
                                required
                            />
                        </div>

                    </div>

                    <button type="submit" id="addBtn">
                        {editingId === null
                            ? "Add Contact"
                            : "Update Contact"}
                    </button>

                </form>

            </section>

            <section className="card">

                <div className="search-box">

                    <input
                        type="text"
                        id="search"
                        placeholder="Search by name..."
                        value={searchText}
                        onChange={function (event) {
                            setSearchText(event.target.value);
                        }}
                    />

                    <button
                        type="button"
                        id="sortBtn"
                        onClick={sortContacts}
                    >
                        Sort A-Z
                    </button>

                </div>

            </section>

            <section className="card">

                <h2>Your Contacts</h2>

                {loading && (
                    <div id="emptyState">
                        <h3>Loading contacts...</h3>
                        <p>Getting contacts from the API.</p>
                    </div>
                )}

                {!loading && error && (
                    <div id="emptyState">

                        <h3>{error}</h3>

                        <button
                            type="button"
                            id="addBtn"
                            onClick={getContacts}
                        >
                            Try Again
                        </button>

                    </div>
                )}

                {!loading &&
                    !error &&
                    contacts.length === 0 && (
                        <div id="emptyState">
                            <h3>No contacts saved yet.</h3>
                        </div>
                    )}

                {!loading &&
                    !error &&
                    contacts.length > 0 &&
                    filteredContacts.length === 0 && (
                        <div id="emptyState">
                            <h3>
                                No contacts match your search.
                            </h3>
                        </div>
                    )}

                {!loading &&
                    !error &&
                    filteredContacts.map(function (contact) {

                        return (
                            <div
                                className="contact-card"
                                key={contact.id}
                            >

                                <div className="contact-left">

                                    <div className="avatar">
                                        {contact.name
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <div className="contact-info">

                                        <h3>
                                            {contact.name}
                                        </h3>

                                        <p>
                                            <a
                                                href={`tel:${contact.phone}`}
                                            >
                                                {contact.phone}
                                            </a>
                                        </p>

                                        <p>
                                            <a
                                                href={`mailto:${contact.email}`}
                                            >
                                                {contact.email}
                                            </a>
                                        </p>

                                    </div>

                                </div>

                                <div className="actions">

                                    <button
                                        className="edit-btn"
                                        onClick={function () {
                                            editContact(contact.id);
                                        }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={function () {
                                            deleteContact(contact.id);
                                        }}
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        );
                    })}

            </section>

            <footer>
                <p>
                    Created by Varshitha | 14 August 2026
                </p>
            </footer>

        </div>
    );
}

export default App;