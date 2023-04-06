import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text);

 const textHandler = () => {
  editTodo(todo.todoId, editedText)
  dialogHandler()
 }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Edit Text"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={editedText} onChange={(e) => setEditedText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancel</Button>
          <Button onClick={textHandler} variant="contained">Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}