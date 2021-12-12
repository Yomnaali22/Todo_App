import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import TodoPage from '../pages/TodoPage';

export default function LoginForm() {
    /*
    const polaObjectUser = {
        pass: "lfnlsjnfsdljnfsdjn",
        email: "pola@hotmail.com"
    }
    */

    const history = useHistory();

    const loginURL = 'https://api-nodejs-todolist.herokuapp.com/user/login';

    const loggedUserURL = 'https://api-nodejs-todolist.herokuapp.com/user/me';
    
    const [state, setState] = useState({
        email: "",
        password: "",
        todoPage: false
    })

    const onChangeHanlder = (e) => setState({...state,  [e.target.name]: e.target.value})
        
    const postLoginData = (e) => {
        e.preventDefault()
        fetch(loginURL, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state),
        })
        .then(response => response.json())
    
        .then(response => localStorage.setItem('LoginToken', response.token))
    
        .catch(error => console.error('An error occured:', error)
        )
        getLoggedUser()
    }

        const getLoggedUser = () => {
            fetch(loggedUserURL, {
                method: 'GET', 
                headers: { Authorization: localStorage.getItem('LoginToken') },
            })
            .then(response => response.json())
        
            .then(response => localStorage.setItem('UserData', JSON.stringify(response)))

            .catch(error => console.error('An error occured:', error)
            )
            showTodoPage()
        }

        const showTodoPage = () => {
            if(localStorage.getItem('LoginToken') !== 'undefined'){
                setState({...state, todoPage:true})
                history.push('/todo/me')
            } 
        }
        

    return (
        <div>
            <form onSubmit={postLoginData}>
                <label>
                    Email
                </label>
                <input type="email" name="email" value={state.email} className="form-control" placeholder='Enter Your email' onChange={onChangeHanlder} required></input>
                <label>
                    Password
                </label>
                <input type="password" name="password" value={state.password} className="form-control" placeholder='Enter Your password' onChange={onChangeHanlder} required>
                </input>
                <div className="text-center">
                <button type="submit" className="btn btn-default btn-primary">Login</button>
                <h4>Don't have an account?</h4>
                <button type='submit' className="btn btn-default btn-success" onClick={() => history.goBack()}>Create Account</button>
                </div>
            </form>
                {state.todoPage? <TodoPage/> : null}
        </div>
    )
}
