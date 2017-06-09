import React from "react"
import { connect } from "react-redux"
import WhatsYourName from "./WhatsYourName";
import {updateName} from "../actions/nameActions";
import LoginForm from "./LoginForm";
import {updateEmail, updatePassword, login} from "../actions/loginActions";
import _ from "lodash";
import Greeting from "./Greeting";
import ChatList from "./ChatList";


@connect((store) => {
  return {
    name:store.nameReducer.get("name"),
    email: store.loginReducer.get("email"),
    password: store.loginReducer.get("password"),
    chats:store.chatReducer.get("chats"),
    token: store.loginReducer.get("token"),
  };
})
export default class Layout extends React.Component {
  updateName = (e) =>{
    const name = e.target.value;
    this.props.dispatch(updateName(name));
  }

  updateEmail = (e) => this.props.dispatch(updateEmail(e.target.value));
  updatePassword = (e) => this.props.dispatch(updatePassword(e.target.value));

  login= (e) =>{
    e.preventDefault();
    const {email, password} = this.props;
    this.props.dispatch(login(email,password));
  }

  render() {
    return (
        <div>
          <LoginForm login={this.login} updateEmail={this.updateEmail} updatePassword={this.updatePassword}/>
          {!_.isEmpty(this.props.chats) && <Greeting name={this.props.name} /> }
          {!_.isEmpty(this.props.chats) && <ChatList chatList={this.props.chats} />}
        </div>
    )
  }
}
