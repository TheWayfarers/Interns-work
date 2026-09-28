const API_BASE =
    "https://dummyjson.com";

export async function getStudyTips() {

    const response = await fetch(
        `${API_BASE}/quotes?limit=10`
    );

    if (!response.ok) {
        throw new Error(
            "Unable to fetch study tips."
        );
    }

    return response.json();
}


export async function createStudyNote(note) {

    const response = await fetch(
        `${API_BASE}/posts/add`,
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                title: "Study Note",
                body: note,
                userId: 1
            })
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to save study note."
        );
    }

    return response.json();
}