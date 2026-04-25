import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage"
import { Route, Routes } from "react-router-dom";
import ReposPage from "./pages/ReposPage";

export default function App() {
    



    return (
        <div>
            <Routes>
                <Route path="/" element= {<Homepage/>}/>
                <Route path="/profile/:username" element={<ProfilePage/>}/>
                <Route path="/repos/:username" element={<ReposPage/>} />
            </Routes>
        </div>
    )
}