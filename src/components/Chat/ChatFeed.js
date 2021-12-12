import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


export default function ChatFeed(props) {
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat]

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys)
    }
    renderMessages()

    return (
        <div>
            My Chat Feed
            <MessageForm/>
            <MyMessage/>
            <TheirMessage/>
        </div>
    )
}
