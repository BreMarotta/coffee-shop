import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../Context';


const Login = () => {
    const { handleLogin } = useContext(Context);
    const history = useHistory()
    const [error, setError] = useState("")

    const [adminObj, setAdminObj] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const newObj = {...adminObj, [e.target.name]: e.target.value};
        setAdminObj(newObj);
        setError("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(adminObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            if(!data.error && !data.errors){
                handleLogin();
                history.push('/');
            } else {
                setAdminObj({
                    username: "",
                    password: ""
                })
                setError(data.error)
            }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <small>Log in to update/ change information for your site.</small>
        <hr/>
        {error}
        <br/>
        <label>Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value = {adminObj.username}
                onChange={handleChange} />
            <br/><br/>
        <label>Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value = {adminObj.password}
                onChange={handleChange} />
            <br/><br/>
        <button type="submit">Login</button>
        <br/><br/>
    </form>
  )
}

export default Login