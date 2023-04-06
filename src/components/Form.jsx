import React, { useState } from 'react'
import { Paper, TextField, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Form = ({ addTodo }) => {

  const [text, setText] = useState(null)
  const [todoId, setTodoId] = useState(0)
  
  const createTodo = (text) => {
    const todoObj = {
      todoId: todoId,
      text: text,
    }
    setTodoId(todoId + 1)
    addTodo(todoObj)
    document.getElementById('filled-basic').value = null
  }

  return (
    <div>
      <Paper style={{ padding: '1em' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="filled-basic"
            label="Adicione uma tarefa..."
            variant="filled"
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <IconButton
            aria-label="add"
            size="large"
            style={{ marginLeft: '.5em' }}
            onClick={() => createTodo(text)}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
        </div>
      </Paper>
    </div>
  )
}

export default Form