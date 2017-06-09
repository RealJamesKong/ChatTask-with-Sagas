import axios from "axios";

export function updateEmail(email){
    return {type: "UPDATE_EMAIL", email};
}

export function updatePassword(password){
    return {type:"UPDATE_PASSWORD", password};
}

export function login(email, password){
    return function (dispatch){
        dispatch({type:"LOGIN_WITH_SAGA",payload:
            {email:email, password:password}});
    }
}
export function loginStart (token){
    return ({type:"LOGIN_STARTED", token:token});
}

export function loginDone(name, chats){
    return ({type:"LOGIN_DONE", name:name, chats:chats});
}

export function loginFail(){
    return ({type: "LOGIN_FAILED"});
}

export function doChats(email, password,token) {
    return function (dispatch) {
        dispatch({type: "LOGIN_MIDWAY", email: email, password: password, token:token});
    }
}