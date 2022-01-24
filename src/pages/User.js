import React from "react";
import UserList from "../components/UserList";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const User = ()=>{
    const [user, setUsers] = useState([null]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then( response =>{
            setUsers(response.data);
            setLoading(false);
        })
    },[]);
    
    return(
        <>
            <h1>User 정보</h1>
               {loading===true 
                ?  <Spinner/>
                : null
               }
            
        </>
    )
}

export default User;