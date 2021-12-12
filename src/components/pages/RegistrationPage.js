import React from 'react'
import RegistrationForm from '../atomic/RegistrationForm';

export default function RegistrationPage(){
    return(
        <div className="bg">
        <div>
            <h1 className="text-center">
                Todo App
            </h1>
            <RegistrationForm />
        </div>
        </div>
    )
}