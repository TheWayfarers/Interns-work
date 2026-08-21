import type { Contact } from "../types/contact";

interface ContactCardProps {
    contact: Contact;
    onDelete: (id: number) => void;
}

function ContactCard({
    contact,
    onDelete,
}: ContactCardProps) {
    const avatarLetter = contact.name
        .charAt(0)
        .toUpperCase();

    return (
        <article className="contact-card">
            <div className="contact-avatar">
                {avatarLetter}
            </div>

            <div className="contact-details">
                <h3>{contact.name}</h3>

                <a href={`tel:${contact.phone}`}>
                    {contact.phone}
                </a>
            </div>

            <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </article>
    );
}

export default ContactCard;
