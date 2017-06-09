import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {loginFail, loginDone} from "../actions/loginActions";

import axios from "axios";

function getChats (token) {
    const config = {headers: {Authorization: "Token " + token,}};
    return (axios.get("http://api.edu.chat/v1/chat/", config));
}

function* getTheChats(action) {
    try {
        const chatResults = yield call (getChats, action.token);
        yield put (loginDone(action.email, chatResults.data.results.chats));
        //yield put ({type: "LOGIN_DONE", name:action.email, user: chatResults.data.results.chats});
    } catch (e) {
        yield put(loginFail());
    }

}

function* mySaga(){
    yield takeEvery("LOGIN_MIDWAY", getTheChats);
}
export default mySaga;