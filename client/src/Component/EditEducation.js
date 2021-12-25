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


export default function EditEducation(prop) {
  const [open, setOpen] = React.useState(true);
  const [education,setEducation] = React.useState({});
  const [titleValue,setTitleValue] = React.useState(education.title);

  //Input field not changing value
  const title = useRef(null);
    const school = useRef(null);
    const city = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);

    const handleUpdate = (e) => {
      e.preventDefault();

      const data = {
        title : title.current.value,
        school : school.current.value,
        city : city.current.value,
        startDate : startDate.current.value,
        endDate : endDate.current.value
    }

    const url = 'http://localhost:3000/education/'+prop.id
        const auth = JSON.parse(localStorage.getItem('userData'));
        
        axios.put(url,data,{
            headers : {
                authorization : auth.token 
            }
        })
            .then((res)=>{
                alert(res.data.title + ' added')
            })
            .catch((err) => {
            })
    }

    const getOneEducation = () => {
        axios.get(`http://localhost:3000/education/${prop.id}`)
        .then((res) => {
            setEducation(res.data);
        })
        .catch(err => {
        })
    }

        React.useEffect(()=>{
          if(open)getOneEducation();
        },[]);
    

  return (

    <div>
      <Dialog open={open} onClose={prop.close}>
        <DialogTitle>Edit Education</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your education
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value)
            } }
            type="text"
            fullWidth
            variant="standard"
            inputRef = {title}
          />
          <TextField
            autoFocus
            margin="dense"
            id="school"
            value={education.school ? education.school : "school"}
            type="text"
            fullWidth
            variant="standard"
            inputRef={school}
          />
          <TextField
          autoFocus
          margin="dense"
          id="city"
          value={education.city ? education.city : "city"}
          type="text"
          fullWidth
          variant="standard"
          inputRef={city}
        />
        <TextField
            autoFocus
            margin="dense"
            id="start date"
            value={education.startDate ?  new Date(education.startDate).toLocaleDateString() : "Start date"}
            type="date"
            fullWidth
            variant="standard"
            inputRef={startDate}
          />
          <TextField
            autoFocus
            margin="dense"
            id="end date"
            value={education.endDate ? education.endDate : "End date"}
            type="date"
            fullWidth
            variant="standard"
            inputRef={endDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={prop.close}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
