import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {

    const { username } = useParams();
    const [ result, setResult ] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUser = async() => {
            try{
                const res = await axios.get(`https://api.github.com/users/${username}`);
                setResult(res.data);
            }catch(e){
                setError("User not found");
            }finally {
            setLoading(false);
      }
        }

        fetchUser();
    },[username])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

    return (
        <>
        {result && (
            <div>
                <ProfileCard user = {result}/>
            </div>
        )}
        </>
    )

}

export default ProfilePage