import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function TodoApi({ id, todo, completed, getData, setList, list, userToken}){
    const [line, setLine] = useState(false)

    //console.log(id)
    //console.log(userToken)
    //the delete todo url
    const deleteTodoURL = `https://api-nodejs-todolist.herokuapp.com/task/${id}`;

    //update task url with id
    const updateTaskULR = `https://api-nodejs-todolist.herokuapp.com/task/${id}`;

    //const [updateTask, setUpdateTask] = useState(true)

    useEffect(() => {
        setLine(completed)
        }
    , [])

    
const deleteReqInfo = {
    method: 'DELETE',
    //headers have the token of the logged in user 
    headers: { Authorization: 'Bearer ' + userToken, "Content-Type": "application/json" },
    redirect: 'follow', 
}

const deleteTodo = async () => {
    try {
        const res = await axios.delete(deleteTodoURL, deleteReqInfo);
        console.log(res)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const updateTodo = async (value) => {
    try {
        const response = await axios.put(updateTaskULR, {
            method: 'put',
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ "completed": value })
        })
        console.log(response)
    } catch (err) {
        console.error(err);
    }
};
/*
    //updating each task using the id of the task and the logged in user token
    //put task to update task if completed or not
    const updateTnodo = value => {
        fetch(updateTaskULR, {
            method: 'PUT',
            headers: { Authorization: 'Bearer ' + userToken,  "Content-Type": "application/json" },
            //body has a state line
            body: JSON.stringify({ "completed": value }), 
            redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => console.log('put request', result))
        .catch(error => console.log('error', error));
    }*/

    
    const deleteHandler = () => {
        setList(list.filter(task =>
            //checking if the id of each object matches the id of the current item being clicked 
            // task.id === todoId this one is true so that's why when we click on the button it removes all other todos and keep the one we clicked on "we don't want that"
            task['_id'] !== id 
            ))
            deleteTodo()
            //getData()
    }
    
    const updateData = () => {
        //setting the line to true
        //setline is async
        setLine(!line) 
        console.log('this is the line', line)
        //sending the line as param becasue setline is async
        updateTodo(!line)
    }

    //event loop javascript
    //closures
    //promises 
    //using axios

    /*
    //the hanldeUpdate changes the state
    const updateHandler = () => {
        if(updateTask === true && line === false){
            //print line-Trough
            setLine(true)
            //update todo with completed false
            updateTodo()
            setUpdateTask(false)

        } else if(line === false){ 
            setLine(false)
            setUpdateTask(false)
            updateTodo()

        } else {
            setLine(false)
            updateTodo()
            setUpdateTask(true)
        }
    }
    */

//if state is true "it's changed to true because of the onclick event that's why we see the line-through effect"
const styling = { 
    textDecoration: line && "line-through"
}

return (
        <div>
            <li style={styling} onClick={updateData}>
                {todo} 
            </li><button onClick={deleteHandler}>X</button>
        </div>
    )
}
