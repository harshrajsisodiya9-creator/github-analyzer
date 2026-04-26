import { useNavigate} from "react-router-dom";
import styles from './Card.module.css';


const UserCard = ({ title, avatar}) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/profile/${title}`)} className={styles.card}>
            <img src={avatar}
                alt={`error loading ${title} avatar`}
            ></img>
            <h3>{title}</h3>
        </div>
    )
}

export default UserCard;