export default function Button({ children, large = false, onClick }) {
    return (
        <div
            className={`rounded-xl bg-blue-500 hover:bg-blue-400 duration-150 cursor-pointer text-white ${
                large ? "px-10 py-3" : "px-5 py-1.5"
            }`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
