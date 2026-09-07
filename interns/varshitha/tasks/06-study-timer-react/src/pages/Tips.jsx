import {
    useEffect,
    useState
} from "react";

import {
    getStudyTips
} from "../services/api";

import Loading from "../components/Loading";

function Tips() {

    const [tips, setTips] = useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        async function loadTips() {

            try {

                setLoading(true);
                setError("");

                const data =
                    await getStudyTips();

                setTips(data.quotes || []);

            } catch (err) {

                setError(
                    err.message
                );

            } finally {

                setLoading(false);

            }
        }

        loadTips();

    }, []);

    return (
        <section className="page-card">

            <h2>Study Tips</h2>

            {loading && <Loading />}

            {error && (
                <div className="error-box">
                    ❌ {error}
                </div>
            )}

            {!loading &&
                !error &&
                tips.map((tip) => (

                    <div
                        className="tip-card"
                        key={tip.id}
                    >

                        <h3>
                            💡 Study Tip
                        </h3>

                        <p>
                            {tip.quote}
                        </p>

                    </div>

                ))
            }

        </section>
    );
}

export default Tips;