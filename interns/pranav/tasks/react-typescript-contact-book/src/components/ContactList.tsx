import type { Contact } from "../types/contact";
import ContactCard from "./ContactCard";

interface ContactListProps {
    contacts: Contact[];
    onDelete: (id: number) => void;
}

function ContactList({
    contacts,
    onDelete,
}: ContactListProps) {
    return (
        <section className="contact-list-section">
            <div className="section-heading">
                <h2>Contacts</h2>
                <span>{contacts.length}</span>
            </div>

            {contacts.length === 0 ? (
                <p className="empty-state">
                    No contacts saved yet.
                </p>
            ) : (
                <div className="contact-list">
                    {contacts.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ContactList;
