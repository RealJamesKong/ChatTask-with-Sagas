import Immutable from 'immutable';

export default function reducer(state=Immutable.Map( {
    chats:[],
}), action){
    switch(action.type){
        case "LOGIN_DONE":
            return state.set("chats", action.chats)
    }
    return state;

}

