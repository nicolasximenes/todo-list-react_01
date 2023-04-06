import React, { useState } from 'react'
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';

export const Home = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  const deleteTodo = (todoId) => {
    const filtered = todos.filter((todo) => todo.todoId !== todoId)
    setTodos(filtered)
  }

  const editTodo = (todoId, editedText) => {
    const todosArray = [...todos]
    todosArray.splice(todoId, 1, { todoId: todoId, text: editedText })
    setTodos(todosArray)
  }

  return (
    <div>
      <Container maxWidth="xs" style={{ marginTop: '2em' }}>
        <Form addTodo={addTodo} />
        <List sx={{ marginTop: '1em' }}>
          {todos.map((todo) => (
            <div key={todo.todoId} style={{ marginTop: '1em' }}>
              <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
            </div>          
          ))}
        </List>
      </Container>
    </div>
  )
}
