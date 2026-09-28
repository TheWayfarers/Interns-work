import db from "../config/database.js";

// GET all contacts
export const getContacts = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM contacts ORDER BY id DESC"
        );

        res.json(rows);
    } catch (error) {
        console.error("Error fetching contacts:", error);

        res.status(500).json({
            message: "Failed to fetch contacts"
        });
    }
};

// GET one contact by ID
export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT * FROM contacts WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error("Error fetching contact:", error);

        res.status(500).json({
            message: "Failed to fetch contact"
        });
    }
};

// CREATE a contact
export const createContact = async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        if (!name || !phone || !email) {
            return res.status(400).json({
                message: "Name, phone and email are required"
            });
        }

        const [result] = await db.query(
            "INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)",
            [name, phone, email]
        );

        const [newContact] = await db.query(
            "SELECT * FROM contacts WHERE id = ?",
            [result.insertId]
        );

        res.status(201).json(newContact[0]);
    } catch (error) {
        console.error("Error creating contact:", error);

        res.status(500).json({
            message: "Failed to create contact"
        });
    }
};

// UPDATE a contact
export const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, email } = req.body;

        if (!name || !phone || !email) {
            return res.status(400).json({
                message: "Name, phone and email are required"
            });
        }

        const [result] = await db.query(
            `UPDATE contacts
             SET name = ?, phone = ?, email = ?
             WHERE id = ?`,
            [name, phone, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        const [updatedContact] = await db.query(
            "SELECT * FROM contacts WHERE id = ?",
            [id]
        );

        res.json(updatedContact[0]);
    } catch (error) {
        console.error("Error updating contact:", error);

        res.status(500).json({
            message: "Failed to update contact"
        });
    }
};

// DELETE a contact
export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            "DELETE FROM contacts WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.json({
            message: "Contact deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting contact:", error);

        res.status(500).json({
            message: "Failed to delete contact"
        });
    }
};