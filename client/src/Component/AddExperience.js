import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef } from 'react';
import { Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useForm } from 'react-hook-form'

function AddExperience() {
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Input = styled('input')({
    display: 'none',
  });


    const title = useRef(null);
    const company = useRef(null);
    const city = useRef(null);
    const startdate = useRef(null);
    const enddate = useRef(null);
    const description = useRef(null);
    const technologies = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {
          title : title.current.value,
          company : company.current.value,
          city : city.current.value,
          startDate : startdate.current.value,
          endDate : enddate.current.value,
          description : description.current.value,
          technologies : technologies.current.value
        };

        const url = 'http://localhost:3000/experience/'
        const auth = JSON.parse(localStorage.getItem('userData'));
        
        console.log("DATA",data)
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
      <Button variant="contained" style={{background : 'coral' , borderRadius : '20px'}} onClick={handleClickOpen}>
        Add Experience
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Add your Project
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
            id="company"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
            inputRef={company}
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
          id="technologies"
          label="technologies"
          type="text"
          fullWidth
          variant="standard"
          inputRef={technologies}
        />
        <TextField
            autoFocus
            margin="dense"
            id="link"
            label="description"
            type="text"
            fullWidth
            variant="standard"
            inputRef={description}
            style = {{marginBottom : '5px'}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="startdate"
            label="start date"
            type="date"
            fullWidth
            variant="standard"
            inputRef={startdate}
            style = {{marginBottom : '5px'}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="enddate"
            label="End Date"
            type="date"
            fullWidth
            variant="standard"
            inputRef={enddate}
            style = {{marginBottom : '5px'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default AddExperience
