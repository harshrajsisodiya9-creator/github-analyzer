import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import UserGrid from "../components/UserGrid";

export default function Homepage(){

    const [username, setUsername] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = async() => {
        try{
            const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
            setResult(res.data.items);
        }
        catch(e){
            console.error(e);
        }
    }


    // debouncing(limting api calls)
    useEffect(() => {

        const timer = setTimeout(() =>{
            if(username){handleSearch();}
            else setResult([]);
        },1000)

        return () => clearTimeout(timer);

    },[username])

    return (
        <div>
            <SearchBar value = {username} onChange = {setUsername} onSearch = {handleSearch}/>
            {result.length > 0 && (
                <div>
                    <UserGrid users = {result} />
                </div>
            )}
        </div>
    )
}