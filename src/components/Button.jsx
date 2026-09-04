function Button ({ children, className }) {
    return (
        <button
            className={`${className} rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}
        >
            {children}
        </button>
    );
}

export default Button;