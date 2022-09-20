import NavBar from "../comps/NavBar";
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Profile() {

    const [ user, setUser ] = useState(null)

    //use use effect
    useEffect(() => {
        getUser()
    }, [user])


    const getUser  = () => {
        axios({
          method: 'get',
          withCredentials: true,
          url: 'http://localhost:3001/getUser'
        }).then(res => {setUser(res.data.username)}).catch(err => {console.log(err)})
    }

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h1>Profile</h1>
                <h1>Username: {user}</h1>
            </div>
        </div>
    )
}