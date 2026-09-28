function Button({
    children,
    onClick,
    disabled = false,
    className = ""
}) {

    return (
        <button
            className={`app-button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;