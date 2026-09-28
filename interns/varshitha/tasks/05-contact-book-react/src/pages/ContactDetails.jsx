import { Link, useParams } from "react-router-dom";
import useContactStore from "../store/contactStore";

function ContactDetails() {

    const { id } = useParams();

    const { contacts } = useContactStore();

    const contact = contacts.find(
        (item) => item.id === Number(id)
    );

    if (!contact) {
        return (
            <div className="app">
                <main>
                    <section className="card">
                        <h2>Contact not found</h2>
                        <Link to="/">
                            Back to Contacts
                        </Link>
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="app">

            <header>
                <h1>Contact Details</h1>
                <p>View contact information</p>
            </header>

            <main>

                <section className="card">

                    <div className="avatar">
                        {contact.name
                            .charAt(0)
                            .toUpperCase()}
                    </div>

                    <h2>{contact.name}</h2>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {contact.phone}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {contact.email}
                    </p>

                    <br />

                    <Link to="/">
                        Back to Contacts
                    </Link>

                </section>

            </main>

        </div>
    );
}

export default ContactDetails;