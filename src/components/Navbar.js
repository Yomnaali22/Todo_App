import React from 'react'
import Image from './api/Image';
import { useHistory } from 'react-router';


export default function Navbar(props) {

    let history = useHistory()

    const loggedUserInfo = localStorage.getItem('UserData')

    const user = JSON.parse(loggedUserInfo);

    let loginToken = localStorage.getItem('LoginToken')


    const url = 'https://api-nodejs-todolist.herokuapp.com/user/logout'

    const deleteUserURL = 'https://api-nodejs-todolist.herokuapp.com/user/me'

    const Logout = (e) => {
        e.preventDefault()
        fetch(url, {
            method: 'POST', 
            headers: {Authorization: loginToken}
        })
        .then(response => localStorage.removeItem('LoginToken'))
        
        .catch(error => console.error('An error occured:', error)
        )
        backToLoginPage()
    }

    const deleteUser = (e) => {
        e.preventDefault()
        fetch(deleteUserURL, {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + loginToken},
            redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        backToRegistrationPage()
    }

    const backToLoginPage = () => {
        history.goBack()
    }
    
    const backToRegistrationPage= () => {
        history.push('/')
        localStorage.removeItem(loggedUserInfo);
        localStorage.removeItem(loginToken)
    }

    const accountinfo = () => {
        history.push('/info')

    }

    return (
    <div>
        <nav>
            <label>Welcome to your Todos, {user["name"]}</label>
            <Image/>
            <select>
                <option onClick={Logout}>Logout</option>
                <option onClick={deleteUser}>Delete Account</option>
                <option onClick={accountinfo}>Your Account</option>
                </select>
                </nav>
                </div>
    )
}
