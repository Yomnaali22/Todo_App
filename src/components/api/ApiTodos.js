import React from 'react'
import { useEffect, useState } from 'react';
import ApiTodo from './ApiTodo';
import axios from 'axios';


export default function ApiTodos(){
    const [list, setList] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    
    //the url of the tasks
    const getTasksURL = 'https://api-nodejs-todolist.herokuapp.com/task';

    //completed tasks url 
    const completedTasksUrl = 'https://api-nodejs-todolist.herokuapp.com/task?completed=true';

    //the token of the logged in user
    let userToken = localStorage.getItem('LoginToken');


    //marwanshehatashehata
    useEffect(() => {
        getCompleted()
        getData()
    }, [])


    
const completedReqInfo = { 
    method: 'GET', 
    headers: { Authorization: 'Bearer ' + userToken, "Content-Type": "application/json" },
    redirect: 'follow'
}

const getCompleted = async () => {
    try {
        const res = await axios.get(completedTasksUrl, completedReqInfo);
        const completed = res.data.data
        setCompletedTodos([...completed])
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
const getRequestInfo = { 
    method: 'GET', 
    headers: { Authorization: 'Bearer ' + userToken, "Content-Type": "application/json" },
    redirect: 'follow'
}

const getData = async () => {
    try {
        const res = await axios.get(getTasksURL, getRequestInfo);
        const tasks = res.data.data
        setList([...tasks])
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

    return (
        <div style={{textAlign: 'center'}}>
            {//loopging over list in a reverse order and creating a new array
            list.slice().reverse().map(todo =>
                //for each item in the array an apiTodo component is rendered with the following props
            <ApiTodo 
            key={todo['_id']}
            id={todo['_id']} 
            todo={todo['description']}
            completed={todo['completed']}
            getData={getData}
            list={list}
            setList={setList}
            userToken={userToken}
            />
            )}
        </div>
    )
}
