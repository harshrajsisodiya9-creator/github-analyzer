import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import UserGrid from "../components/UserGrid";
import "./Container.css"

export default function Homepage(){

    const [username, setUsername] = useState("");
    const [result, setResult] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSearch = async(signal) => {
        try{
            setLoading(true);
            const res = await axios.get(`https://api.github.com/search/users?q=${username}`, {signal});
            setResult(res.data.items);
        }
        catch(e){
            if (e.name === "CanceledError") return;

            let message = "Something went wrong";

            if (e.response && e.response.data) {
            message = e.response.data.message || message;
            } else if (e.message) {
            message = e.message;
            }

            setError(message);
        }
        finally{
            setLoading(false);
        }
    }


    // debouncing(limting api calls)
    useEffect(() => {
        const controller = new AbortController();
        const timer = setTimeout(() =>{
            if(username){handleSearch(controller.signal);}
            else setResult([]);
        },500)

        return () => {clearTimeout(timer)
            controller.abort();
        };

    },[username])

    return (
        <div className="container">
            <SearchBar value = {username} onChange = {setUsername} onSearch = {handleSearch}/>
            <div>
                {loading && <h3>Loading ....</h3>}
                {error && <h3>{error}</h3>}
            </div>
            {result.length > 0 && (
                <div>
                    <UserGrid users = {result} />
                </div>
            )}
        </div>
    )
}