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
   
    return(
        <>
            <h1>User 정보</h1>
           {loading
            ? <Spinner />
            : null 
        }
         
            </>
        )
}

export default User;