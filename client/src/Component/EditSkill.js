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



export default function EditSkill(prop) {

    const [open, setOpen] = React.useState(true);    
    const skill = useRef(null);
    const [oneskill,setOneSkill] = React.useState({});

    const auth = JSON.parse(localStorage.getItem('userData'));

    const getOneSkill = ()=>{
        axios.get('http://localhost:3000/skills/'+prop.id,{
            headers : {
                authorization : auth.token
            }
        }).then((res) => {
            setOneSkill(res.data)
        })
    }

    React.useEffect(() => {
    getOneSkill();  
    },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        name : skill.current.value
    }

    axios.put('http://localhost:3000/skills/'+prop.id,data,{
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Skill
      </Button>
      <Dialog open={open} onClose={prop.close}>
        <DialogTitle>Edit Skill</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="skill"
            label={oneskill.name}
            type="text"
            placeholder={oneskill.name}
            fullWidth
            variant="standard"
            inputRef = {skill}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={prop.close}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
