import {
    useCallback,
    useState
} from "react";

import {
    createStudyNote
} from "../services/api";

function Notes() {

    const [note, setNote] =
        useState("");

    const [savedNotes, setSavedNotes] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const handleSubmit = useCallback(
        async (event) => {

            event.preventDefault();

            if (!note.trim()) {

                setError(
                    "Please enter a study note."
                );

                return;
            }

            try {

                setLoading(true);
                setError("");

                const result =
                    await createStudyNote(
                        note
                    );

                setSavedNotes(
                    (previousNotes) => [
                        ...previousNotes,
                        {
                            id: result.id,
                            text: note
                        }
                    ]
                );

                setNote("");

            } catch (err) {

                setError(
                    err.message
                );

            } finally {

                setLoading(false);

            }
        },
        [note]
    );

    return (
        <section className="page-card">

            <h2>Study Notes</h2>

            <form
                className="note-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="studyNote">
                    What did you study today?
                </label>

                <textarea
                    id="studyNote"
                    value={note}
                    onChange={(event) =>
                        setNote(
                            event.target.value
                        )
                    }
                    placeholder="Write your study note..."
                    rows="5"
                />

                <button
                    className="theme-btn"
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Saving..."
                        : "Save Note"}
                </button>

            </form>

            {error && (
                <div className="error-box">
                    ❌ {error}
                </div>
            )}

            <div className="notes-list">

                {savedNotes.map((item) => (

                    <div
                        className="note-card"
                        key={item.id}
                    >

                        <h3>
                            📖 Study Note
                        </h3>

                        <p>
                            {item.text}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Notes;