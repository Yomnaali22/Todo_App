import React, { useState } from 'react'
import Navbar from './../Navbar'
import Todos from '../todos/Todos'
//import { makeStyles } from '@mui/styles';
import ApiTodos from '../api/ApiTodos';
import '../../style/todoPage.scss'

export default function TodoPage() {
   // const style = useStyles();
    const [todo, setTodo] = useState('')
    const [todosList, setTodosList] = useState([])

    return (
        <div className='grid-container'>
            <div className='navbar'>
            <Navbar/>
            </div>
            <div className='todos'>
                <Todos
                todo={todo} 
                setTodo={setTodo} 
                todosList={todosList}
                setTodosList={setTodosList}/>
                </div>
                <div className='apiTodos'>
                <ApiTodos/>
                </div>
            </div>
            
    )
}
