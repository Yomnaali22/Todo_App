import React from 'react'
import RegistrationForm from '../atomic/RegistrationForm';

export default function RegistrationPage(){
    return(
        <div>
            <body className='background'>
            <h1 class="jumbotron text-center"> Todo App </h1>
            <RegistrationForm />
            </body>
        </div>
    )
}