import { useNavigate} from "react-router-dom";

const ProfileCard = ({user}) => {
    
    const navigate = useNavigate();

    return (
  <div>
    <img 
      src={user.avatar_url} 
      alt={`Profile picture of ${user.login}`} 
    />

    <div>
      <strong>Full Name:</strong> {user.name}
    </div>

    <div>
      <strong>Username:</strong> {user.login}
    </div>

    <div>
      <strong>Bio:</strong> {user.bio ? user.bio : "No bio"}
    </div>

    <div>
      <strong>Followers:</strong> {user.followers}
    </div>

    <div>
      <strong>Following:</strong> {user.following}
    </div>

    <div onClick={() => navigate(`/repos/${user.login}`)}>  {/*Remeber to navigate from root path / and not ./(relative path) */}
      <strong>Public Repos:</strong> {user.public_repos}
    </div>

    <div>
      <strong>Location:</strong> {user.location ? user.location : "N/A"}
    </div>

    <div>
      <strong>Website:</strong> 
      <a href={user.blog} target="_blank" rel="noreferrer">
        {user.blog}
      </a>
    </div>

    <div>
      <strong>Twitter:</strong> {user.twitter_username ? user.twitter_username : "N/A"}
    </div>

    <div>
      <strong>Joined:</strong> {new Date(user.created_at).getFullYear()}
    </div>
  </div>
    );

}

export default ProfileCard