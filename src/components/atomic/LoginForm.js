import React from 'react'
import { useState, useRef } from 'react'
import { useHistory } from 'react-router'
import TodoPage from '../pages/TodoPage';

export default function LoginForm() {
    const [state, setState] = useState({
        email: "",
        password: "",
        todoPage: false
    })

    const loginURL = 'https://api-nodejs-todolist.herokuapp.com/user/login';

    const loggedUserURL = 'https://api-nodejs-todolist.herokuapp.com/user/me';

    const loginToken = localStorage.getItem('LoginToken')

    const history = useHistory();

    const ref = useRef('')

    const onChangeHanlder = (e) => setState({...state,  [e.target.name]: e.target.value})

    const getLoggedUser = async() => {
        try{
            const response = await fetch(loggedUserURL, {
                method: 'GET', 
                headers: {Authorization: 'Bearer ' + loginToken, 'Content-Type': 'application/json'},
            })
            const result = await response.json()
            console.log('logged user information', result)
            return result
        } catch(err){
            console.error(err)
        }
    }
    
    const loggedUserInfo = async(e)=> {
        e.preventDefault()
        getLoggedUser()
           try{
            const response = await fetch(loginURL, {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(state),
            })
            const result = await response.json()
            const saveToken = localStorage.setItem('LoginToken', result.token)
            const theLogin = localStorage.getItem('LoginToken') !== 'undefined'? (setState({...state, todoPage:true}),
            history.push('/todo/me')) : ref.current.innerText = 'Wrong Email or password'
            console.log(result)
            return (saveToken, theLogin)
        } catch(err){
            console.error(err)
        }
    }

    return (
        <div className="container">
            <form onSubmit={loggedUserInfo} className="form-horizontal">
                <div className='form-group'>
                <label className="control-label col-sm-2">Email: </label>
                <div className="col-sm-10">
                <input type="email" name="email" value={state.email} className="form-control" placeholder='Enter Your email' onChange={onChangeHanlder} required></input>
                </div>
                </div>
                <div className='form-group'>
                <label className="control-label col-sm-2">Password: </label>
                <div className="col-sm-10">
                <input type="password" name="password" value={state.password} className="form-control" placeholder='Enter Your password' onChange={onChangeHanlder} required>
                </input>
               </div>
               </div>
                <div className="text-center">
                <button type="submit" className="btn btn-default btn-primary">Login</button>
                <h6>Don't have an account?</h6>
                <button type='submit' className="btn btn-default btn-success" onClick={() => history.goBack()}>Create Account</button>
                </div>
            </form>
                {state.todoPage? <TodoPage/> : null}
        </div>
    )
}
