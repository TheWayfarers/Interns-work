const API_URL = "http://localhost:5000/api/contacts";

// Get all contacts
export const getContacts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch contacts");
    }

    return response.json();
};

// Get one contact
export const getContactById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch contact");
    }

    return response.json();
};

// Add contact
export const createContact = async (contact) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    });

    if (!response.ok) {
        throw new Error("Failed to create contact");
    }

    return response.json();
};

// Update contact
export const updateContact = async (id, contact) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    });

    if (!response.ok) {
        throw new Error("Failed to update contact");
    }

    return response.json();
};

// Delete contact
export const deleteContact = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete contact");
    }

    return response.json();
};