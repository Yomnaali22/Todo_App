import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import '../../style/registration.scss'

//stateful container
export default function RegistrationForm() {
    let url = "https://api-nodejs-todolist.herokuapp.com/user/register";


    const [state, setstate] = useState({
        name: '',
        email: '',
        password: '',
        age: ''
    });

    const handleChange = (e) => {
        setstate({...state, 
            [e.target.name]: e.target.value})
    }

    const postRegistrationData = (e) => {
        e.preventDefault()
        fetch(url, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            //sending the stata
            body: JSON.stringify(state),
        })
        //getting the value in json form
        .then(response => response.json())
        //saving token in storage
        .then(response => localStorage.setItem('User Data', JSON.stringify(response.token)))
        .catch(error => console.error('An error occured:', error)
        )
    }

    let history = useHistory();
        const handleClick = () => {
            history.push("/login");
            <LoginPage/>
        }

    return (
        <div>
            <form onSubmit={postRegistrationData}>
            <div className="container">
                <div className="row">
                <label className="fas fa-spinner">Name</label>
                <input type='name'  className="form-control" value={state.name} name='name' placeholder='Enter Your name' onChange={handleChange} required/><br></br>
                <label>Email</label>
                <input type='email' className="form-control" value={state.email} name='email' placeholder='Enter Your email' onChange={handleChange} required/><br></br>
                <label id="pass">Password</label>
                <input type='password' className="form-control" minLength="7" value={state.password} name='password' placeholder='Enter Your password' onChange={handleChange} required/><br></br>
                <label>Age</label>
                <input type='number' className="form-control" value={state.age} name='age' placeholder='Enter Your age' onChange={handleChange} required/><br></br>
                <div className="text-center">
                <button type="submit" className="btn btn-default btn-success">Create Account</button>
                <h4>Already have an account?</h4>
                <button type='submit' className="btn btn-default btn-primary" onClick={handleClick}>Login</button>
                </div>
                </div>
                </div>
            </form>
        </div>
    )
}
