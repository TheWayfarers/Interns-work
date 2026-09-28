import express from "express";

import {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

// GET all contacts
router.get("/", getContacts);

// GET one contact
router.get("/:id", getContactById);

// CREATE contact
router.post("/", createContact);

// UPDATE contact
router.put("/:id", updateContact);

// DELETE contact
router.delete("/:id", deleteContact);

export default router;