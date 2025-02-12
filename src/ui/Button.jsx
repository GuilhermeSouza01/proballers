const Button = ({ league, onClick, isActive }) => {
    return (
        <button
            className={`px-4 py-2  mb-4 mr-4 cursor-pointer w-60 h-12  rounded transition-all ${
                isActive ? "bg-[#4627b0] text-white" : "bg-[#1b1d30] text-white"
            }`}
            onClick={onClick}
        >
            {league}
        </button>
    );
};

export default Button;
