let contacts = [];
let searchText = "";

const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");
const contactCount = document.getElementById("contactCount");
const searchInput = document.getElementById("searchInput");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "") {
        alert("Please enter a name.");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Phone number should contain only digits.");
        return;
    }

    if (phone.length < 10) {
        alert("Enter a 10-digit phone number.");
        return;
    }

    if (phone.length > 10) {
        alert("Phone number exceeds 10 digits.");
        return;
    }

    const contact = {
        id: Date.now(),
        name: name,
        phone: phone
    };

    contacts.push(contact);

    contactForm.reset();

    renderContacts();
});

searchInput.addEventListener("input", function () {
    searchText = this.value.toLowerCase();
    renderContacts();
});

function renderContacts() {

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchText)
    );

    contactList.innerHTML = "";

    if (contacts.length === 0) {

        contactList.innerHTML = `
            <p class="empty">
                No contacts saved yet.
            </p>
        `;

    } else if (filteredContacts.length === 0) {

        contactList.innerHTML = `
            <p class="empty">
                No contacts match your search.
            </p>
        `;

    } else {

        filteredContacts.forEach(contact => {

            const card = document.createElement("div");

            card.className = "contact-card";

            card.innerHTML = `
                <div class="contact-left">

                    <div class="avatar">
                        ${contact.name.charAt(0).toUpperCase()}
                    </div>

                    <div class="contact-info">

                        <h3>${contact.name}</h3>

                        <p>
                            📞
                            <a href="tel:${contact.phone}">
                                ${contact.phone}
                            </a>
                        </p>

                    </div>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteContact(${contact.id})">
                    Delete
                </button>
            `;

            contactList.appendChild(card);

        });

    }

    contactCount.textContent = contacts.length;
}

function deleteContact(id) {

    contacts = contacts.filter(contact => contact.id !== id);

    renderContacts();

}

renderContacts();