import React from 'react'
import { useRef } from 'react';
import axios from 'axios';

function Register() {

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    
    const handleSubmit = (e)=> {
        e.preventDefault();
        const data = {
            name : name.current.value,
            email : email.current.value,
            password : password.current.value
        }

        axios.post("http://localhost:3000/user/signup",data)
            .then(res=>console.log(res))
            .catch(err => {
                console.log(err)
            })
        
    }

    return (
        <div>
            <form>
                <div>
                <input type="text" name="name" placeholder="name" ref = {name}></input>
                </div>
                <div>
                <input type = "email"  placeholder="email" ref={email}></input>
                </div>
                <div>
                <input type = "password" placeholder="password" ref={password}></input>
                </div>
                <button type="submit" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Register
