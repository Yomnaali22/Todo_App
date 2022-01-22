import React from 'react'
import Todo from '../atomic/Todo'

export default function Todos({ todo, setTodo, todosList, setTodosList }) {
    const addTaskURL = 'https://api-nodejs-todolist.herokuapp.com/task';

    const loginToken = localStorage.getItem('LoginToken');

    const token = localStorage.getItem('Token')

    const getToken = loginToken || token

    //post request
    const postTask = () => {
        fetch(addTaskURL, {
            method: 'POST',
            headers: {Authorization: 'Bearer ' + getToken, 
            "Content-Type": "application/json" },
            body: JSON.stringify({ "description": todo }),
            redirect: 'follow'
        })
        //getting the value in text form
        .then(response => response.text())
        //consoling the value
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

    const handleUserInput = e => {
        setTodo(e.target.value)
    }


    //the handle enter function checks whether the key pressed by the user is enter key or not 
    //if true state changes and an object is created based on the user input
    const handleEnter = e => {
        if (e.key === "Enter"){
        setTodosList(
            [...todosList, { 
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
                {todosList.slice().reverse().map(todo =>
                ///redering the todo component for each item in the list while passing the data we need to use in the todo
                <Todo
                key={todo['_id']}
                todoId={todo['_id']}
                Todo={todo.description}
                todosList={todosList}
                setTodosList={setTodosList}
                todoObject={todo}
                />
                    )}
            </ul>
    </div>
    )
}
