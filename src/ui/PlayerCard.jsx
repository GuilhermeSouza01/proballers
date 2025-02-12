import Spinner from "./Spinner";

const PlayerCard = ({ player }) => {
    if (!player) {
        return <Spinner />;
    }

    return (
        <div className="w-44 h-44 bg-[#1B1D30] rounded-lg overflow-hidden relative">
            <img
                src={player.photo}
                alt={player.name}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2">
                <p className="text-white font-semibold text-center">
                    {player.name}
                </p>
            </div>
        </div>
    );
};

export default PlayerCard;
