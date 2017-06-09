import React from "react";

const LoginForm = ({login,updateEmail, updatePassword}) =>{
    return <form onSubmit={login}>
        <p>
            Email:
            <input type = "text" onChange = {updateEmail}/>
        </p>
        <p>
            Password:
            <input type="password" onChange = {updatePassword}/>
        </p>
        <input type="submit"/>
    </form>;
}

export default LoginForm
