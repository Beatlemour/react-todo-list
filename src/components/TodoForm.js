import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setTodo({
            ...todo, task: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            console.log(todo);
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <TextField 
                label="Task"
                name="task"
                input="text"
                value= {todo.task}
                onChange= {handleTaskInputChange}
            /> */}
            <TextField id="outlined-basic" variant="outlined" label="Task"
                name="task"
                input="text"
                value={todo.task}
                onChange={handleTaskInputChange} />
            <Button
                variant="contained" size="large" color="primary"
                startIcon={<AddIcon />}
                type="submit"
            >
                List Item
            </Button>
        </form>
    )
}

export default TodoForm
