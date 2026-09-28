import { create } from "zustand";

import {
    getContacts,
    createContact,
    updateContact,
    deleteContact
} from "../services/contactApi";

const useContactStore = create((set) => ({
    contacts: [],
    loading: false,
    error: null,

    // Get contacts
    fetchContacts: async () => {
        set({
            loading: true,
            error: null
        });

        try {
            const contacts = await getContacts();

            set({
                contacts,
                loading: false
            });
        } catch (error) {
            set({
                error: error.message,
                loading: false
            });
        }
    },

    // Add contact
    addContact: async (contact) => {
        try {
            const newContact = await createContact(contact);

            set((state) => ({
                contacts: [newContact, ...state.contacts]
            }));

            return newContact;
        } catch (error) {
            set({
                error: error.message
            });

            throw error;
        }
    },

    // Update contact
    editContact: async (id, contact) => {
        try {
            const updatedContact = await updateContact(id, contact);

            set((state) => ({
                contacts: state.contacts.map((item) =>
                    item.id === id ? updatedContact : item
                )
            }));

            return updatedContact;
        } catch (error) {
            set({
                error: error.message
            });

            throw error;
        }
    },

    // Delete contact
    removeContact: async (id) => {
        try {
            await deleteContact(id);

            set((state) => ({
                contacts: state.contacts.filter(
                    (item) => item.id !== id
                )
            }));
        } catch (error) {
            set({
                error: error.message
            });

            throw error;
        }
    }
}));

export default useContactStore;