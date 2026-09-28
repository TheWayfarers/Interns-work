import { Link } from "react-router-dom";

function ContactCard({ contact, onDelete }) {
    return (
        <div className="contact-card">

            <div className="contact-left">

                <div className="avatar">
                    {contact.name.charAt(0).toUpperCase()}
                </div>

                <div className="contact-info">

                    <h3>{contact.name}</h3>

                    <p>{contact.phone}</p>

                    <p>{contact.email}</p>

                </div>

            </div>

            <div className="actions">

                <Link
                    to={`/contact/${contact.id}`}
                    className="edit-btn"
                >
                    View
                </Link>

                <Link
                    to={`/edit/${contact.id}`}
                    className="edit-btn"
                >
                    Edit
                </Link>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(contact.id)}
                >
                    Remove
                </button>

            </div>

        </div>
    );
}

export default ContactCard;