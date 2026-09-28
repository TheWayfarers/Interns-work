import { useCallback } from "react";
import useContactStore from "../store/contactStore";

function useContacts() {
    const contacts = useContactStore(
        (state) => state.contacts
    );

    const loading = useContactStore(
        (state) => state.loading
    );

    const error = useContactStore(
        (state) => state.error
    );

    const fetchContacts = useContactStore(
        (state) => state.fetchContacts
    );

    const addContact = useContactStore(
        (state) => state.addContact
    );

    const editContact = useContactStore(
        (state) => state.editContact
    );

    const removeContact = useContactStore(
        (state) => state.removeContact
    );

    const loadContacts = useCallback(() => {
        return fetchContacts();
    }, [fetchContacts]);

    const createContact = useCallback(
        (contact) => {
            return addContact(contact);
        },
        [addContact]
    );

    const updateContact = useCallback(
        (id, contact) => {
            return editContact(id, contact);
        },
        [editContact]
    );

    const deleteContact = useCallback(
        (id) => {
            return removeContact(id);
        },
        [removeContact]
    );

    return {
        contacts,
        loading,
        error,
        loadContacts,
        createContact,
        updateContact,
        deleteContact
    };
}

export default useContacts;