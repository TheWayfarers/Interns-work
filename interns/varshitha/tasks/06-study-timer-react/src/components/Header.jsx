import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <div className="title">

                <img
                    src="/images/tick-tock.png"
                    className="timer-image"
                    alt="Tick Tock"
                />

                <div>
                    <h1>Study Timer</h1>
                    <p>Focus • Study • Take a Break</p>
                </div>

            </div>

            <nav>
                <Link to="/study">Study</Link>
                <Link to="/history">History</Link>
                <Link to="/settings">Settings</Link>
            </nav>

        </header>
    );
}

export default Header;