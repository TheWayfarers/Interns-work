let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editId = null;

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phoneNo");
const emailInput = document.getElementById("emailId");

const searchInput = document.getElementById("search");
const sortBtn = document.getElementById("sortBtn");
const addBtn = document.getElementById("addBtn");

const contactList = document.getElementById("contactList");
const contactCount = document.getElementById("contactCount");

form.addEventListener("submit", saveContact);   
searchInput.addEventListener("input", renderContacts);
sortBtn.addEventListener("click", sortContacts);

function saveContact(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "") {
        alert("Please enter name");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
    alert("Enter a valid 10-digit phone number");
    return;
}

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (editId === null) {

        contacts.push({
            id: Date.now(),
            name,
            phone,
            email
        });

    } else {

        contacts = contacts.map(contact => {

            if (contact.id === editId) {
                return {
                    id: editId,
                    name,
                    phone,
                    email
                };
            }

            return contact;

        });

        editId = null;
        addBtn.textContent = "Add Contact";
    }

    saveData();
    form.reset();
    renderContacts();
}

function renderContacts() {

    const searchText = searchInput.value.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchText)
    );

    contactCount.textContent = `${contacts.length} Contacts`;

    if (contacts.length === 0) {

        contactList.innerHTML = `
            <div id="emptyState">
                <h3>No contacts saved yet.</h3>
            </div>
        `;

        return;
    }

    if (filteredContacts.length === 0) {

        contactList.innerHTML = `
            <div id="emptyState">
                <h3>No contacts match your search.</h3>
            </div>
        `;

        return;
    }

    contactList.innerHTML = "";

    filteredContacts.forEach(contact => {

        contactList.innerHTML += `
            <div class="contact-card">

                <div class="contact-left">

                    <div class="avatar">
                        ${contact.name.charAt(0).toUpperCase()}
                    </div>

                    <div class="contact-info">

                        <h3>${contact.name}</h3>

                        <p>
                            <a href="tel:${contact.phone}">
                                ${contact.phone}
                            </a>
                        </p>

                        <p>
                            <a href="mailto:${contact.email}">
                                ${contact.email}
                            </a>
                        </p>

                    </div>

                </div>

                <div class="actions">

                    <button class="edit-btn"
                        onclick="editContact(${contact.id})">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="deleteContact(${contact.id})">
                        Remove
                    </button>

                </div>

            </div>
        `;

    });

}

function editContact(id) {

    const contact = contacts.find(contact => contact.id === id);

    if (!contact) return;

    nameInput.value = contact.name;
    phoneInput.value = contact.phoneNo;
    emailInput.value = contact.emailId;

    editId = id;

    addBtn.textContent = "Update Contact";
}

function deleteContact(id) {

    contacts = contacts.filter(contact => contact.id !== id);

    saveData();
    renderContacts();
}

function sortContacts() {

    contacts.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    saveData();
    renderContacts();
}

function saveData() {

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

}

renderContacts();