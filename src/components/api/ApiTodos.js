import React from 'react'
import { useEffect, useState } from 'react';
import ApiTodo from './ApiTodo';

export default function ApiTodos(){
    const [list, setList] = useState([])

    const [completedTodos, setCompletedTodos] = useState([])
    
    const getTasksURL = 'https://api-nodejs-todolist.herokuapp.com/task';

    const completedTasksUrl = 'https://api-nodejs-todolist.herokuapp.com/task?completed=true';

    const loginToken = localStorage.getItem('LoginToken');

    const token = localStorage.getItem('Token')

    const getToken = loginToken || token

    console.log(loginToken)

    useEffect(() => {
        getCompleted()
        getData()
    }
    , [])

const getData = async()=> {
    try{
        const response = await fetch(getTasksURL, {
            method: 'GET', 
            headers: { Authorization: getToken, "Content-Type": "application/json" },
        })
        const result = await response.json()
        const tasks = result.data
        console.log('this is tasks', tasks)
        return setList([...tasks])
    } catch (err) {
        console.error(err);
    }
}

const getCompleted = async () => {
    try {
        const response = await fetch(completedTasksUrl, {
            method: 'GET', 
            headers: {Authorization: 'Bearer ' + getToken, "Content-Type": "application/json"}
        });
        const result = await response.json()
        const completed = result.data
        setCompletedTodos([...completed])
    } catch (err) {
        console.error(err);
    }
};

console.log('completed', completedTodos)

    return (
        <div style={{textAlign: 'center'}}>
            {list.slice().reverse().map(todo =>
            <ApiTodo 
            key={todo['_id']}
            id={todo['_id']} 
            todo={todo['description']}
            completed={todo['completed']}
            getData={getData}
            list={list}
            setList={setList}
            loginToken={loginToken}
            />
            )}
        </div>
    )
}
