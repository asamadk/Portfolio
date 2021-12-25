import axios from 'axios';
import React from 'react'
import { useRef } from 'react';

function Login() {

    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            email : email.current.value,
            password : password.current.value
        }

        axios.post("http://localhost:3000/user/login",data
        )
        .then((res) => {
            if(res.data.token){
                axios.defaults.headers.common["Authorization"] = `${res.data.token}`
                localStorage.setItem(
                    "userData",
                    JSON.stringify({
                        token : res.data.token,
                        isLogged : true
                    })
                );
                alert("Login Success");
                console.log(res);
            }
        }).catch((err) => {
            console.log(err)
        });

    }

    const styles = {
        padding : '10px',
        margin : '2px',
        marginLeft : '100px',
        width : '250px',
        border : "0.5px grey solid",
    }

    const buttonStyle = {
        padding : '10px',
        backgroundColor : 'red',
        border : '0px solid',
        borderRadius : '5px',
        width : '100px',
        color : 'white',
        marginLeft : '190px',
        marginTop : '10px'
    }

    const main = {
        width : '500px',
        marginLeft : '500px',
        minHeight : '390px'

        // background : 'linear-gradient(to left, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
    }


    const textl = {
        fontFamily : 'sans-serif',
        fontWeight : '2px',
        marginLeft : '170px',
        marginTop : '200px',
        marginBottom : '20px'
    }

    return (
        <div style={main}>
            <div style={textl}>
            <h1>Login</h1>
            </div>
            <div>
                <input style={styles} type="text" placeholder="email" ref={email}></input>
            </div>
            <div>
                <input style={styles} type="password" placeholder="password" ref={password}></input>
            </div>
            <button style={buttonStyle} type="submit" onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login;