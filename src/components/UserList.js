import React from "react";
import {Link} from 'react-router-dom';
const UserList = ({users}) => {
    
    return(
        <div>
            
            {users.map(user => {
                return (
                    <Link className="card mb-2" to={`/users/${user.id}`}  key={user.id}>  
                            <div className="card-body p-3">
                                {user.name} 
                            {/* 이 유저를 클릭했을 때 url이동 */}
                            </div>      
                    </Link>
              
                )
            })}
        </div>
    )
}

export default UserList;