import { useState } from "react";
import type { Contact } from "../types/contact";

interface ContactFormProps {
    onAddContact: (contact: Omit<Contact, "id">) => void;
}

function ContactForm({ onAddContact }: ContactFormProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    function handlePhoneChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const value = event.target.value;

        // Allow only numbers
        if (!/^\d*$/.test(value)) {
            return;
        }

        setPhone(value);

        if (value.length < 10 && value.length > 0) {
            setError("Enter 10 digit phone number");
        } else if (value.length > 10) {
            setError("Numbers exceed 10 digits");
        } else {
            setError("");
        }
    }

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            setError("Please enter a name");
            return;
        }

        if (phone.length < 10) {
            setError("Enter 10 digit phone number");
            return;
        }

        if (phone.length > 10) {
            setError("Numbers exceed 10 digits");
            return;
        }

        onAddContact({
            name: trimmedName,
            phone,
        });

        setName("");
        setPhone("");
        setError("");
    }

    return (
        <section className="contact-form-section">
            <h2>Add Contact</h2>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >
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
                        type="tel"
                        inputMode="numeric"
                        maxLength={11}
                        placeholder="Enter 10 digit phone number"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>

                {error && (
                    <p className="form-error">
                        {error}
                    </p>
                )}

                <button type="submit">
                    Add Contact
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
