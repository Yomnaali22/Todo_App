import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../../style/registration.scss'

export default function RegistrationForm() {
    const [state, setstate] = useState({
        name: '',
        email: '',
        password: '',
        age: ''
    });

    const handleChange = e => {
        setstate({...state, 
            [e.target.name]: e.target.value})
    }
    
    const url = "https://api-nodejs-todolist.herokuapp.com/user/register"
    
    const history = useHistory();

     const registration = async(e)=> {
        e.preventDefault()
           try{
            const response = await fetch(url, {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(state),
            })
            const result = await response.json()
            const saveResult = localStorage.setItem('UserData', JSON.stringify(result.user))
            const saveToken = localStorage.setItem('Token', result.token)
            const handleRespone = result.ok && !saveToken && !saveResult? alert('Email or username Already Exist'): history.push('/todo/me') 
            console.log(result)
            return ( handleRespone, saveResult, saveToken );
        } catch(err){
            console.error(err)
        }
    }

    return (
        <div className="container">
            <form onSubmit={registration} className="form-horizontal" >
            <div>
                <div className="form-group">
                <label className="control-label col-sm-2" for="name">Name:</label>
                <div className="col-sm-10">
                <input type='name'  className="form-control" value={state.name} name='name' placeholder='Enter Your name' onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2" for="email">Email:</label>
                <div className="col-sm-10 has-success">
                <input type='email' className="form-control" value={state.email} name='email' placeholder='Enter Your email' onChange={handleChange} required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2" id="pass">Password:</label>
                <div className="col-sm-10">
                <input type='password' className="form-control" minLength="7" value={state.password} name='password' placeholder='Enter Your password' onChange={handleChange} required/>
               </div>
               </div>
               <div className="form-group">
                <label className="control-label col-sm-2">Age:</label>
                <div className="col-sm-10">
                <input type='number' className="form-control" value={state.age} name='age' placeholder='Enter Your age' onChange={handleChange} required/>
                </div>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-default btn-success">Create Account</button>
                </div>
                </div>
                </div>
                <h6 className="text-center">Already have an account?</h6>
                <div className="text-center">
                <button className="btn btn-default btn-primary" onClick={() => history.push('/login')}>Login</button>
                </div>
            </form>
        </div>
    )
}
