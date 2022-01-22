import React, { useEffect, useState } from 'react'

export default function TodoApi({ id, todo, completed, setList, list, loginToken}){
    const [line, setLine] = useState(false)

    const deleteTodoURL = `https://api-nodejs-todolist.herokuapp.com/task/${id}`;

    const updateTaskULR = `https://api-nodejs-todolist.herokuapp.com/task/${id}`;

    useEffect(() => {
        setLine(completed)
        }
    , [])
    
    const deleteTodo = async() => {
    try {
        const res = await fetch(deleteTodoURL, {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + loginToken, "Content-Type": "application/json" },
        });
        console.log(res)
    } catch (err) {
        console.error(err);
    }
};

const updateTodo = async(value) => {
    try {
        const response = await fetch(updateTaskULR, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + loginToken,
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ "completed": value })
        })
        console.log(response)
    } catch (err) {
        console.error(err);
    }
}
    
    const deleteHandler = () => {
        setList(list.filter(task =>
            task['_id'] !== id 
            ))
            deleteTodo()
            }
    
    const updateData = () => {
        setLine(!line) 
        console.log('this is the line', line)
        updateTodo(!line)
    }

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
