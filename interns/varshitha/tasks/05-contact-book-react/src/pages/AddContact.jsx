import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useContacts from "../hooks/useContacts";

function AddContact() {
    const navigate = useNavigate();

    const { createContact } = useContacts();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const newName = name.trim();
        const newPhone = phone.trim();
        const newEmail = email.trim();

        // Name validation
        if (!newName) {
            alert("Please enter name");
            return;
        }

        // Phone validation
        if (newPhone.length !== 10 || isNaN(newPhone)) {
            alert("Enter a valid 10-digit phone number");
            return;
        }

        // Email validation
        if (!newEmail.includes("@")) {
            alert("Please enter a valid email");
            return;
        }

        try {
            await createContact({
                name: newName,
                phone: newPhone,
                email: newEmail
            });

            // Go back to Home after adding
            navigate("/");

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="app">

            <header>
                <h1>Add Contact</h1>
                <p>Create a new contact</p>
            </header>

            <main>

                <section className="card">

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="phone">
                                Phone
                            </label>

                            <input
                                id="phone"
                                type="text"
                                placeholder="10-digit phone"
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />

                        </div>

                        <div className="form-buttons">

                            <button type="submit">
                                Add Contact
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/")}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </section>

            </main>

        </div>
    );
}

export default AddContact;