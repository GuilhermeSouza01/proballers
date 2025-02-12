import { PlayersProvider } from "./context/PlayerContext";
import AppLayout from "./ui/AppLayout";

function App() {
    return (
        <PlayersProvider>
            <AppLayout></AppLayout>;
        </PlayersProvider>
    );
}

export default App;
