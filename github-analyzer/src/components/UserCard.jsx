import { useNavigate} from "react-router-dom";


const UserCard = ({ title, avatar}) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`./profile/${title}`)}>
            <img src={avatar}
                alt={`error loading ${title} avatar`}
            ></img>
            <h3>{title}</h3>
        </div>
    )
}

export default UserCard;