import { useState } from "react";

function Motivation() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const studyQuotes = [
        {
            quote: "Success is the sum of small efforts, repeated day in and day out.",
            author: "Robert Collier"
        },
        {
            quote: "The beautiful thing about learning is that nobody can take it away from you.",
            author: "B.B. King"
        },
        {
            quote: "The expert in anything was once a beginner.",
            author: "Helen Hayes"
        },
        {
            quote: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
            quote: "Focus on being productive instead of busy.",
            author: "Tim Ferriss"
        },
        {
            quote: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        }
    ];

    async function getQuote() {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "https://dummyjson.com/quotes?limit=30"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch motivation.");
            }

            const data = await response.json();

            const keywords = [
                "study",
                "learn",
                "learning",
                "education",
                "knowledge",
                "read",
                "reading",
                "focus",
                "practice",
                "school",
                "book",
                "success"
            ];

            const filteredQuotes = data.quotes.filter((item) => {
                const text = item.quote.toLowerCase();

                return keywords.some((keyword) =>
                    text.includes(keyword)
                );
            });

            if (filteredQuotes.length > 0) {
                const randomQuote =
                    filteredQuotes[
                        Math.floor(
                            Math.random() *
                            filteredQuotes.length
                        )
                    ];

                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            } else {
                const randomQuote =
                    studyQuotes[
                        Math.floor(
                            Math.random() *
                            studyQuotes.length
                        )
                    ];

                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            }

        } catch (error) {
            console.error(
                "Motivation API error:",
                error
            );

            const randomQuote =
                studyQuotes[
                    Math.floor(
                        Math.random() *
                        studyQuotes.length
                    )
                ];

            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);

            setError(
                "API unavailable. Showing a study motivation instead."
            );

        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="motivation-card">

            <h2>📚 Study Motivation</h2>

            <p className="motivation-description">
                Need a little motivation to keep studying?
            </p>

            <button
                className="theme-btn"
                onClick={getQuote}
                disabled={loading}
            >
                {loading
                    ? "Getting Motivation..."
                    : "💡 Get Study Motivation"}
            </button>

            {error && (
                <div className="error-box">
                    {error}
                </div>
            )}

            {quote && (
                <div className="quote-box">

                    <p className="quote">
                        "{quote}"
                    </p>

                    <p className="author">
                        — {author}
                    </p>

                </div>
            )}

        </section>
    );
}

export default Motivation;