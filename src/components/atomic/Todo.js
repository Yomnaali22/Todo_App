import React from 'react'
import { useState } from 'react'

export default function Todo({ Todo, todosList, setTodosList, todoId }) {
    const [update, setUpdate] = useState(false)

    const handleDelete = () => {
        setTodosList(todosList.filter(task =>
           task['_id'] !== todoId
            ))
    }

    const handleUpdate = () => {
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