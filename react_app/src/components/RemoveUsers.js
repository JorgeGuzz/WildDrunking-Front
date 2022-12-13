import axios from "axios";
import React, { useEffect, useState } from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import { SERVER_URL } from "../App";
import "../styles/remove_users.css"


export default function RemoveUsers() {

    const [users, setUsers] = useState("")


    useEffect(() => {
        getUsers();
        console.log(users);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    const getUsers = async () => {
        const url = `${SERVER_URL}/admins/users`;
        await axios.get(url).then((response) => {
            setUsers(response.data);
        });
    }

    const removeUser = async (e, id) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'))
        const url = `${SERVER_URL}/users/${id}`;
        console.log(token)
        try {
            await axios.delete(url, 
                { headers: {"Authorization" : `Bearer ${token}`} }).then((response) => {
                alert(response.data);
            });
        } catch (error) {
            alert(error);
        }
    }

    const usersArray = [];

    try {
        users.map(obj => {
        let html = (
        <tr key={obj.id}>
            <td>{obj.id}</td>
            <td>{obj.username}</td>
            <td>{obj.email}</td>
            <td><a href="/"><input type="button" value="Remove" className="join-public-button" onClick={event => removeUser(event, obj.id)}/></a></td>
        </tr>
        );
        usersArray.push(html)
        return obj


    })

    } catch (error) {}

    return (
        <div className="Remove_Users">
            <HelmetProvider><Helmet>
                <title> ADMIN Remove Users - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="p-box">
                <h1> Remove Users </h1>
                <div className="player-info">
                    <table className="player-info-table">
                        <thead>
                            <tr>
                                <th>Id user</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {usersArray}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}