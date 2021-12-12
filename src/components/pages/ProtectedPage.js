import React from 'react'
import { Redirect } from 'react-router-dom'

export default function ProtectedPage(props) {
    // we saved the todo page component in a varaible 

    const TodoPageComponent = props.component;

    //saving the token in a variable to check whether it is available or not
    const isAuthenticated = localStorage.getItem('LoginToken');

    //check if the user login token is available or not 
    return isAuthenticated? (
        //rendering the todopage if true
        <TodoPageComponent/>

    ):(
        //if the token doesn't exist redirect the user back to the login page
        <Redirect to={{ pathname: '/login' }} />

    )
}