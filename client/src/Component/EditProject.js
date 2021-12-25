// import React from 'react'
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

function EditProject(prop) {
    const [open, setOpen] = React.useState(false);
  const [selectedImage , setSelectedImage] = React.useState({});
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Input = styled('input')({
    display: 'none',
  });

  const handleImage = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log("XXX",e.target.files)
  }

  const title = useRef(null);
    const description = useRef(null);
    const technologies = useRef(null);
    const link = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('title' , title.current.value);
        formData.append('description',description.current.value);
        formData.append('technologies',technologies.current.value);
        formData.append('haveLink',true);
        formData.append('link',link.current.value);
        formData.append('projectImage',selectedImage);

        console.log("DAATA",formData)

        const url = 'http://localhost:3000/project/'+prop.id
        const auth = JSON.parse(localStorage.getItem('userData'));
        
        axios.put(url,formData,{
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
      <Button  onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Projects</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your Project
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
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            inputRef={description}
          />
          <TextField
          autoFocus
          margin="dense"
          id="technologies"
          label="Technolgies"
          type="text"
          fullWidth
          variant="standard"
          inputRef={technologies}
        />
        <TextField
            autoFocus
            margin="dense"
            id="link"
            label="Link"
            type="text"
            fullWidth
            variant="standard"
            inputRef={link}
            style = {{marginBottom : '5px'}}
          />
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" 
            multiple ={false} type="file" name = "projectImage"
             onChange={(e)=>handleImage(e)}
             />
            <Button variant="contained" component="span">
                Upload
            </Button>
            </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProject
