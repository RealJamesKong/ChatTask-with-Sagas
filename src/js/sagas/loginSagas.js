import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {doChats, loginStart, loginFail} from "../actions/loginActions";
import {updateName} from "../actions/nameActions"
import axios from "axios";

function getToken(email, password) {
    return axios.post("http://api.edu.chat/v1/api/login/",
        {username: email, password: password, platform: "web"});
}

function* checkLogin(action) {
 try {
 const results = yield call(getToken, action.payload.email, action.payload.password);
 yield put (updateName(results.data.results.user.first_name));
 yield put (loginStart(results.data.results.token));
 yield put (doChats(action.payload.email, action.payload.password,
 results.data.results.token));
 } catch (e) {
     yield put (loginFail());
     //yield put ({type: "LOGIN_FAILED"});
 }

 }

function* mySaga(){
    yield takeEvery("LOGIN_WITH_SAGA",checkLogin);
}
export default mySaga;