import React from 'react'
import Todo from '../atomic/Todo'
//import Input from '@mui/material/Input';

export default function Todos({ todo, setTodo, todosList, setTodosList }) {
    //posting task url
    const addTaskURL = 'https://api-nodejs-todolist.herokuapp.com/task';

    //token generated by the login
    const token = localStorage.getItem('LoginToken');

    //post request
    const postTask = () => {
        fetch(addTaskURL, {
            method: 'POST',
            headers: {Authorization: 'Bearer ' + token, 
            "Content-Type": "application/json" },
            //todo is the user input
            body: JSON.stringify({ "description": todo }),
            redirect: 'follow'
        })
        //getting the value in text form
        .then(response => response.text())
        //consoling the value
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

    //setting the state witht the user input
    const handleUserInput = e => {
        setTodo(e.target.value)
    }


    //the handle enter function checks whether the key pressed by the user is enter key or not 
    //if true state changes and an object is created based on the user input
    const handleEnter = e => {
        if (e.key === "Enter"){
        setTodosList(
            [...todosList, { 
                //description is the user input
                description: todo, 
                //generating a random id for each todo
                _id: Math.floor(Math.random() * 100000000)
            }
        ])
            postTask()
            //setting the input to empty one last time to clear the input 
            setTodo('')
        }
    }

    return (
        <div>
            <input value={todo} onChange={handleUserInput} placeholder="Add todo" onKeyPress={handleEnter}
            className='form-control'/>
            <ul>
                {//loopgin through the todoslist in a reverse order
                todosList.slice().reverse().map(todo =>
                ///redering the todo component for each item in the list while passing the data we need to use in the todo
                <Todo
                //a special key for each item on the list
                key={todo['_id']}
                //the id of the todo 
                todoId={todo['_id']}
                //the todo entered by the user
                Todo={todo.description}
                //the todosList itself
                todosList={todosList}
                //the settodos function to filter out the new data in the our todoList state 
                setTodosList={setTodosList}
                
                todoObject={todo}
                />
                    )}
            </ul>
    </div>
    )
}