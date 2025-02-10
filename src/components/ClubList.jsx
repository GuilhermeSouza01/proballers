import { useState } from "react";
import Heading from "../ui/Heading";
import searchIcon from "../assets/img/icons8-search.svg";

const ClubList = () => {
    const [search, setSearch] = useState("");
    const teams = [
        "Manchester City",
        "Real Madrid",
        "Bayern Munich",
        "Juventus",
        "Liverpool",
        "Barcelona",
        "Chelsea",
    ];

    const filteredTeams = teams.filter((team) =>
        team.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-4">
            <Heading title="Search Team" />
            <div className="p-4 rounded-lg ml-auto mr-8">
                <div className="relative">
                    <img
                        src={searchIcon}
                        alt="search icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                        type="text"
                        placeholder="Search team..."
                        className="w-96 h-12 p-2 pl-10 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="mt-4 ">
                    {filteredTeams.length > 0 ? (
                        filteredTeams.map((team, index) => (
                            <div
                                key={index}
                                className="p-2 bg-[#1B1D30] rounded-lg mb-2 w-96 h-16"
                            >
                                {team}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm mt-2">
                            No teams found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClubList;
