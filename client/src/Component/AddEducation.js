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


export default function FormDialog(prop) {
  const [open, setOpen] = React.useState(false);
  console.log(prop.value)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = useRef(null);
    const school = useRef(null);
    const city = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title : title.current.value,
            school : school.current.value,
            city : city.current.value,
            startDate : startDate.current.value,
            endDate : endDate.current.value
        }
        const url = 'http://localhost:3000/education/'
        const auth = JSON.parse(localStorage.getItem('userData'));
        
        axios.post(url,data,{
            headers : {
                authorization : auth.token 
            }
        })
            .then((res)=>{
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
            
    }

  return (

    <div>
      <Button variant="contained" style={{background: 'coral', borderRadius : '20px'}} onClick={handleClickOpen}>
        Add Education
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Education</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your education
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            inputRef = {title}
          />
          <TextField
            autoFocus
            margin="dense"
            id="school"
            label="School"
            type="text"
            fullWidth
            variant="standard"
            inputRef={school}
          />
          <TextField
          autoFocus
          margin="dense"
          id="city"
          label="City"
          type="text"
          fullWidth
          variant="standard"
          inputRef={city}
        />
        <TextField
            autoFocus
            margin="dense"
            id="start date"
            label="start"
            type="date"
            fullWidth
            variant="standard"
            inputRef={startDate}
          />
          <TextField
            autoFocus
            margin="dense"
            id="end date"
            label="end"
            type="date"
            fullWidth
            variant="standard"
            inputRef={endDate}
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
