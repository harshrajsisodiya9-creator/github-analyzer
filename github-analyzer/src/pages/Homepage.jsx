import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Homepage(){

    const [username, setUsername] = useState("");

    function handleSearch(){
        console.log(username);
    }

    return (
        <div>
            <SearchBar value = {username} onChange = {setUsername} onSearch = {handleSearch}/>
        </div>
    )
}