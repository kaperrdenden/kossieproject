import React from "react";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

const UserList = ({users})=>{
   console.log(users);
    return(
        <div>
            {users.map(user=>{
                return (<div key={user.id}>
                        {user.name}
                     </div>)
            })}
        </div>
    )
}

export default UserList;