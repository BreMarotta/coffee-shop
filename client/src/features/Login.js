import React, { useState, useContext } from 'react'
import { Context } from '../Context'

const Login = () => {
    const { handleLogin } = useContext(Context);
    const [error, setError] = useState("")

    const [adminObj, setAdminObj] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const newObj = {...adminObj, [e.target.name]: e.target.value};
        setAdminObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(adminObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(!data.error && !data.errors){
                    handleLogin()
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
        <small>As the shop owner, you can log in to update/ change information for your site.</small>
        <hr/><br/>

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
                type="text"
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