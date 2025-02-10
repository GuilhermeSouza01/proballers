import Header from "./Header";
import LeagueSwitcher from "./LeagueSwitcher";
import PlayersPage from "../components/PlayersList";
import ClubList from "../components/ClubList";

const AppLayout = () => {
    return (
        <div className="bg-[#131520] min-h-screen flex flex-col text-white">
            <Header />
            <LeagueSwitcher />
            <section className="flex flex-col md:flex-row gap-6 w-full p-4">
                <div className="w-full md:w-3/4">
                    <PlayersPage />
                </div>

                {/* <div className="w-full md:w-1/4 md:ml-0">
                    <ClubList />
                </div> */}
            </section>
        </div>
    );
};

export default AppLayout;
