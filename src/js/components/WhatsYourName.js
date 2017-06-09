import React from "react";

const WhatsYourName = ({updateName}) =>{
    return <div>
        <h3>What's your name?</h3>
        <input type="text" onChange = {updateName}/>
    </div>
}

export default WhatsYourName;