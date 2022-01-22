import React from 'react'
import Image from './api/Image';
import { useHistory } from 'react-router';


export default function Navbar() {

    const loggedUserInfo = localStorage.getItem('UserData')

    const user = JSON.parse(loggedUserInfo);

    const token = localStorage.getItem('Token')

    const loginToken = localStorage.getItem('LoginToken')

    const url = 'https://api-nodejs-todolist.herokuapp.com/user/logout'

    const deleteUserURL = 'https://api-nodejs-todolist.herokuapp.com/user/me'

    const history = useHistory()

    const logout = async(e)=> {
        e.preventDefault()
           try{
            const response = await fetch(url, {
                method: 'POST', 
                headers: { Authorization: loginToken}
            })
            const deleteToken = localStorage.removeItem('LoginToken')
            const deleteRegistrationToken = localStorage.removeItem('Token')
            const backToLoginPage = history.push('/login')
            return ( deleteToken, deleteRegistrationToken,
                backToLoginPage )
        } catch(err){
            console.error(err)
        }
    }

    const deleteUser = async(e)=> {
        e.preventDefault()
           try{
            const response = await fetch(deleteUserURL, {
                method: 'DELETE', 
                headers: { Authorization: 'Bearer ' + loginToken},
            })
            const result = await response.text()
            const deleteUserData = localStorage.removeItem('UserData')
            const deleteToken = localStorage.removeItem(token)
            const deleteLoginToken = localStorage.removeItem('LoginToken')
            const backToRegistration = history.push('/')
            console.log(result)
            return(deleteToken,deleteLoginToken, deleteUserData, backToRegistration)
        } catch(err){
            console.error(err)
        }
    }

    return (
    <div>
        <nav>
            <label>Welcome to your Todos, {user["name"]}</label>
            <Image/>
            <select>
                <option>Menu</option>
                <option onClick={logout}>Logout</option>
                <option onClick={deleteUser}>Delete Account</option>
                <option onClick={() => history.push('/info')}>Your Account</option>
                </select>
                </nav>
                </div>
    )
}
