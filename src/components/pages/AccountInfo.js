import React from 'react'
import { useHistory } from 'react-router'
import Accountsettings from '../atomic/Accountsettings'


export default function AccountInfo() {
    
    let history = useHistory()

    const userInformation = localStorage.getItem('UserData')

    const user = JSON.parse(userInformation)

    const todos = () => history.goBack()

    return (
    <div className="container"> 
        <button onClick={todos}>Your todos</button>
        <h1>Account Information</h1>
        <p>Email: {user["email"]}</p>
        <p>Account created at: {user["createdAt"]}</p>
        <p>Last account update: {user["updatedAt"]}</p>
        <p>Age: {user['age']}</p>
        <Accountsettings/>
        </div>
    )
}