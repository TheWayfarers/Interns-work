import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams
} from "react-router-dom";

import ContactForm from "../components/ContactForm";
import useContacts from "../hooks/useContacts";

function EditContact() {

    const { id } = useParams();
    const navigate = useNavigate();

    const {
        contacts,
        updateContact
    } = useContacts();

    const [contact, setContact] = useState(null);

    useEffect(() => {

        const existingContact = contacts.find(
            (item) => item.id === Number(id)
        );

        setContact(existingContact || null);

    }, [contacts, id]);

    async function handleSubmit(updatedContact) {

        try {

            await updateContact(
                Number(id),
                updatedContact
            );

            navigate("/");

        } catch (error) {

            alert(error.message);

        }
    }

    if (!contact) {
        return (
            <div className="app">

                <main>

                    <section className="card">

                        <h2>
                            Contact not found
                        </h2>

                    </section>

                </main>

            </div>
        );
    }

    return (
        <div className="app">

            <header>
                <h1>Edit Contact</h1>
                <p>Update contact information</p>
            </header>

            <main>

                <section className="card">

                    <ContactForm
                        initialData={contact}
                        submitText="Update Contact"
                        onSubmit={handleSubmit}
                        onCancel={() => navigate("/")}
                    />

                </section>

            </main>

        </div>
    );
}

export default EditContact;