import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {

  const [openDialog, setOpenDialog] = React.useState(false)

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <>
      <EditTodoDialog open={openDialog} dialogHandler={dialogHandler} todo={todo} editTodo={editTodo} />
      <Paper style={{ marginTop: '1em', padding: '.5em 0' }} onClick={() => {}}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.todoId)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}

export default TodoItem