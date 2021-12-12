import React from 'react'
import { useState } from 'react'

export default function Todo({ Todo, todosList, setTodosList, todoId }) {
    const [update, setUpdate] = useState(false)
    
    /**
     * handle the delete action 
     * each time the user clicks on th button 
     * the element that's clicked is evaluted against a condition
     * is the id of the todo doesn't match the id we passed to the Todo component ?
     * if true keep the todo, if false remove the todo and keep other todos on the list
     */
    const handleDelete = () => {
        setTodosList(todosList.filter(task =>
            //checking if the id of each object matches the id of the current item being clicked 
            // task.id === todoId this one is true so that's why when we click on the button it removes all other todos and keep the one we clicked on "we don't want that"
            task['_id'] !== todoId //this one is false so it will not exist in the new array 'removed' 
            ))
    }

    //the hanldeUpdate changes the state 
    const handleUpdate = () => {
            //changing state to true when the onClick event is fired
        setUpdate(true)
        if(update){
            setUpdate(false)
        }
    }

    //if state is true "it's changed to true because of the onclick event that's why we see the line-through effect"
    const styling = { 
        textDecoration: update && "line-through"
    }

    return (
        <div>  
            <li style={styling} onClick={handleUpdate}>
                {Todo} <button onClick={handleDelete}>X</button>
                </li>
                </div>
                )
            }