import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddExperience from '../Component/AddExperience';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader, Avatar, Grid ,Container} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Dialog } from '@mui/material';
import { textAlign } from '@mui/system';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import Scrollbar from '../Component/Scrollbar';
import { green } from '@mui/material/colors';

function NewsItem({ exp }) {

  return (
    <Stack direction="row" alignItems="center" spacing={2} style={{backgroundColor : '#EEEEEE',padding : '10px' , borderRadius : '20px'}} >
      <Avatar style={{backgroundColor : 'coral'}}>{exp.company.substring(0,1)}</Avatar>
      <Box sx={{ minWidth: 240 }} >
          <Typography variant="subtitle1" noWrap>
            {exp.title} at {exp.company}
          </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {exp.description.substring(0,150)}
        </Typography>
        <Typography variant="caption">
          {new Date(exp.startDate).toLocaleDateString() + ' to ' + new Date(exp.endDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {"Location : "+exp.city}
      </Typography>
      </Box>
      
    </Stack>
  );
}

function ExperienceAdmin() {

  const [experience,setExperience] = React.useState([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);

    const user = JSON.parse(localStorage.getItem('userData'));

  const getAllExperiences = () => {
    axios.get('http://localhost:3000/experience/')
      .then((res)=>{
        setExperience(res.data);
      }).catch((err)=>{
        console.log("Error is"+err)
      })
    }
    React.useEffect(()=>{
      getAllExperiences();
    },[])

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/experience/${id}`,{
        headers : {
          authorization : user.token
        }
      })
        .then((res)=>{
          alert('Deleted')
          window.location.reload()
        }).catch((err) => {
          console.log(err);
        })
    }

    const openFullDesc = (id) => {
      console.log("ID",id)
      setDialogOpen(true);
    }

    const handleClose = () => {
      setDialogOpen(false);
    }

    return (
      // <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl" >
      <Grid item xs={12} md={6} lg={8} >
      <div style={{width : '81%', position : 'absolute', right : '0', paddingTop : '100px'}}>
    <Card style = {{margin : '50px', borderRadius : '20px'}}>
      <CardContent>

      <CardHeader title="Experience" />
      <Scrollbar>  
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {experience.map((exp) => (
            <NewsItem key={exp._id} exp={exp} />
            ))}
        </Stack>
      </Scrollbar>
            </CardContent>
            <CardActions>
              <AddExperience/>
            </CardActions>
    </Card>
    </div>
      </Grid>
    </Container>
    // </Page>
    )
}

export default ExperienceAdmin
