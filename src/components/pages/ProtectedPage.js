import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'

//protected Route
export default function ProtectedPage(props) {
    const TodoPageComponent = props.component;
    const isAuthenticated = localStorage.getItem('LoginToken');
    const userData = localStorage.getItem('UserData')
    const token = localStorage.getItem('Token')
    const login = isAuthenticated && userData || token? <TodoPageComponent/>: <Redirect to={{ pathname: '/login' }}/>

    return login
}