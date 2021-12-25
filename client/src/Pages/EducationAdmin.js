import AddEducation from '../Component/AddEducation';
import EditEducation from '../Component/EditEducation';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

export default function EducationAdmin() {

      const [open,setOpen] = React.useState(false);
      const [education,setEducation] = React.useState([]);
      const [educationid,seteducationid] = React.useState(1);

      const getAllEducation = () => {
        axios.get('http://localhost:3000/education/')
        .then((res) => {
            setEducation(res.data)
        })
      }
      
      const handleClose = () => {
        setOpen(false);
      };

      React.useEffect(()=> {
          getAllEducation();
      },[]);
      
      const tableStyle = {
          tableContainer : {
              width  : "80%",
              marginTop : "5%",
              marginLeft : "15%"
          },
          buttonCss : {
            marginTop : "20px",
            // marginLeft : "5%"
            marginRight : "15%",
            marginBottom : "100px",
            textAlign : 'center'
          },
          insideButton : {
              marginRight : "5px",
              background : 'coral',
              padding : '10x'
          }
      }
    const user = JSON.parse(localStorage.getItem("userData"));

      const editEducation = (id) => {
        setOpen(true);
        seteducationid(id);
      }

      const deleteEducation = (id)=> {
        console.log("Delete",id)
        const auth = JSON.parse(localStorage.getItem('userData'));
        axios.delete('http://localhost:3000/education/'+id,{
          headers : {
            authorization : auth.token
          }
        }).then((res)=>{
          alert(res.data.Message);
          window.location.reload()
        })
      }

    return (
      <div style={{width : '80%', position : 'absolute', right : '0', paddingTop : '100px'}}>
        <div >
          {/* <Card style={{padding : "100px", borderRadius : '20px'}}> */}
        <TableContainer component={Paper} style={{borderRadius : '20px', padding : '40px',maxWidth: 950,marginLeft : '60px'}}>
        <Typography variant='h4'>
            Education
          </Typography>
        <Table sx={{    border : 0}} aria-label="simple table">
          <TableHead >
            <TableRow 
            >
              <TableCell>Title</TableCell>
              <TableCell align="right">School</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">StartDate</TableCell>
              <TableCell align="right">EndDate</TableCell>
              {user.isLogged && <TableCell align="right">Option</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {education.map((education) => (
                <TableRow
                key={education._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {education.title}
                </TableCell>
                <TableCell align="right">{education.school}</TableCell>
                <TableCell align="right">{education.city}</TableCell>
                <TableCell align="right">{new Date(education.startDate).toLocaleDateString()}</TableCell>
                <TableCell align="right">{new Date(education.endDate).toLocaleDateString()}</TableCell>
                {user.isLogged && <TableCell align="right">
                    <EditIcon onClick={(e)=>{editEducation(education._id)}} variant="contained" style={{color : 'coral'}} size="small" />
                    <DeleteIcon onClick={(e)=> {deleteEducation(education._id)}} variant="contained" size="small" style={{color : 'coral',marginLeft : '5px'}} />
                </TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Card> */}
      <div style={tableStyle.buttonCss}>
          {user.isLogged && <AddEducation/> }
      </div>
      <div style={tableStyle.buttonCss}>
          {user.isLogged && open && <EditEducation id = {educationid} close = {handleClose}/>}
      </div>
      </div>
        </div>
    )
}

