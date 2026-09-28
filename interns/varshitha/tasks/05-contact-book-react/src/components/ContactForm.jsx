import { useState } from "react";

function ContactForm({
    initialData = {
        name: "",
        phone: "",
        email: ""
    },
    onSubmit,
    onCancel,
    submitText = "Save Contact"
}) {
    const [formData, setFormData] = useState(initialData);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!formData.name || !formData.phone || !formData.email) {
            alert("Please fill all fields");
            return;
        }

        await onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                />
            </div>

            <div>
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone"
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />
            </div>

            <button type="submit">
                {submitText}
            </button>

            <button
                type="button"
                onClick={onCancel}
            >
                Cancel
            </button>

        </form>
    );
}

export default ContactForm;