import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef } from 'react';
import axios from 'axios';



export default function AddSkill(prop) {
    const [open, setOpen] = React.useState(false);
    
    const skill = useRef(null);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        skill : skill.current.value,
    }
    const auth = JSON.parse(localStorage.getItem('userData'));
    console.log("SKILL",data);

    axios.post('http://localhost:3000/skills/',data,{
        headers : {
            authorization : auth.token
        }
    }).then((res)=>{
        console.log(res);
        window.location.reload();
    }).catch((err) =>{

    })
  }

  return (

    <div>
      <Button variant="contained" style={{background : 'coral',borderRadius : '20px'}} onClick={handleClickOpen}>
        Add Skill
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Skill</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="skill"
            label="Skill"
            type="text"
            fullWidth
            variant="standard"
            inputRef = {skill}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
