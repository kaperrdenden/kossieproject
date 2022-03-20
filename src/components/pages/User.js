import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../UserList";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(user);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => {
            setUser(response.data);
            setLoading(false);
            // 로딩이 끝나면 false로 바꾸어 주는거
        });

    },)
    const userDetail = loading ? <Spinner /> 
    : <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
    </div>
    return(
        <>
            <h1>User 정보</h1>
            {userDetail}
         
            </>
        )
}

export default User;