import './UserGrid.css';
import UserCard from './UserCard'

export default function UserGrid({users}){



    return (
        <div className="grid">
            {users.map((user)=>{
                return (
                    <UserCard key={user.id}
                        title = {user.login}
                        avatar= {user.avatar_url}
                    />
                )
            })}
        </div>
    )
}