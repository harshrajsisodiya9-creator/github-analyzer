import { useParams } from "react-router-dom"
import ProfileCard from "../components/ProfileCard";
import useGitHubUser from "../hooks/useGitHubUser";

const ProfilePage = () => {

    const { username } = useParams();
    const {user, loading, error} = useGitHubUser(username);

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message || "Something went wrong"}</p>

    return (
        <>
        {user && (
            <div>
                <ProfileCard user = {user}/>
            </div>
        )}
        </>
    )

}

export default ProfilePage;