import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = (props)  => {

    const [user, setUser] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        axios
            .get(`api/users/${id}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    

    // const username = user.map(user => user.name);
    // console.log(username);

    // if(user) {
    //     return <h1>{user.id}</h1>
    // }

    return(
        <>
        <h1>User's Profile</h1>
        <p>
            User ID: {id}
        </p>
        </>
    );
} 

export default User;    