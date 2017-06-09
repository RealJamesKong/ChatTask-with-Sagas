import doLogin from "./loginSagas";
import getChats from "./getChatsSagas";

export default function*(){
    yield[doLogin(), getChats()];
}