import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios  from 'axios'

export default function Home() {

  const [registerUsername, setRegisterUsername] = useState('')
  const [ registerPassword, setRegisterPassword ] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [ loginPassword, setLoginPassword ] = useState('')

  const [ user, setUser ] = useState(null)

  const register = () => {
    axios({
      method: 'post',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: 'http://localhost:3001/register'
    }).then(res => {console.log(res)}).catch(err => {console.log(err)})
  }
  const login = () => {
    axios({
      method: 'post',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:3001/login'
    }).then(res => {console.log(res)}).catch(err => {console.log(err)})
  }
  const getUser  = () => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/getUser'
    }).then(res => {setUser(res.data.username)}).catch(err => {console.log(err)})
  }


  return (
    <div className={styles.container}>
      <div>
        <h1>Register</h1>
        <input type="text" name="username" placeholder="username" onChange={e => setRegisterUsername(e.target.value )}/>
        <input type="password" name="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>

      <div action="/login" method="post">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" onChange={e => setLoginUsername(e.target.value )}/>
        <input type="password" name="password" placeholder="password" onChange={e => setLoginPassword(e.target.value )}/>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {user ? <h1>{user}</h1> : null}
      </div>
    </div>
  )
}
