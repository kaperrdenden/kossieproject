import React from "react";
import axios from "axios";
import {Link } from 'react-router-dom';
import { useEffect, useState } from "react/cjs/react.development";

const UserList = ({users})=>{
   console.log(users);
    return(
        <div>
            

            {users.map(user=>{
                return (
                <div 
                    className="card mb-2"
                    key={user.id}
                >
                    <div className="card-body p-3">
                    <Link to={`/users/${user.id}`}>    {user.name}</Link>
                    </div>
            </div>)
            })}
        </div>
    )
}

export default UserList;