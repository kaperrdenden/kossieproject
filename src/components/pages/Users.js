import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../UserList";
import Spinner from "../Spinner";
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false);
            // 로딩이 끝나면 false로 바꾸어 주는거
        });

    },[])
   
    return(
        <>
            <h1>users1</h1>
           {loading
            ? <Spinner />
            :  <UserList users={users} />
        }
         
            </>
        )
}

export default Users;