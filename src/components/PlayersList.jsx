import Heading from "../ui/Heading";

const PlayersList = () => {
    return (
        <div className="mt-4 ml-8">
            <Heading title="Players" />
            <div className="flex flex-wrap gap-5 justify-start">
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
                <div className="w-44 h-44 bg-[#1B1D30] rounded-lg"></div>
            </div>
        </div>
    );
};

export default PlayersList;
