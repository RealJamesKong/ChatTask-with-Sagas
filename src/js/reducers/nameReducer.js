import Immutable from 'immutable';

export default function reducer (state=Immutable.Map({
    name:"",
}),action ){
    switch (action.type){
        case "UPDATE_NAME":
            return state.set("name",action.name)
        //  return {...state, name: action.name};
    }
    return state;
}

