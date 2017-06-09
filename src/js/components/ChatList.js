import React from "react";

const ChatList= ({chatList}) => {
    const theChats = chatList.map((chat) => {
        return (
            <h1 key={chat.id}>{chat.name}</h1>
        )
    })
    return <div>{theChats}</div>
};

export default ChatList;