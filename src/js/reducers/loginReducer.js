import Immutable from 'immutable';

export default function reducer(state= Immutable.Map({
    email: "",
    password: "",
    isloginIn:false,
    token:"",
}), action){
    switch(action.type){
        case "UPDATE_EMAIL":
            return state.set("email",action.email)
        //  return {...state, email: action.email};
        case "UPDATE_PASSWORD":
        //  return {...state, password: action.password};
            return state.set ("password", action.password);
        case "LOGIN_STARTED":
            return state.merge({isloginIn:true, token: action.token});
        //  return {...state, isloginIn: true, token: action.token};
        case "LOGIN_DONE":
            return state.merge({isloginIn:true})
        //  return {...state, isloginIn: true, name: action.name,user: action.user};
    }
    return state;

}
