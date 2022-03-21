import React from "react";
import {Link} from 'react-router-dom';
const UserList = ({users}) => {
    
    return(
        <div>
            
            {users.map(user => {
                return (
                    <div className="card mb-2"  key={user.id}>
                        <div className="card-body p-3">
                            
                          <Link to={`/users/${user.id}`}>  {user.name} </Link>

                          {/* 이 유저를 클릭했을 때 url이동 */}
                        </div>
                    </div>
              
                )
            })}
        </div>
    )
}

export default UserList;