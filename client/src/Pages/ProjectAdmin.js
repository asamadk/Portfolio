import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddProjects from '../Component/AddProjects';
import axios from 'axios';
import EditProject from '../Component/EditProject';


export default function ProjectAdmin() {

    const user = JSON.parse(localStorage.getItem('userData'));
    const [projects , setProjects ] = React.useState([]);

    const getProjects= () => {
        axios.get('http://localhost:3000/project/')
        .then((res) => {
            setProjects(res.data);
            console.log(res.data)
        })
    }

    React.useEffect(()=> {
        getProjects();
    },[])


    const handleDelete = (id) => {
      console.log(id)
      axios.delete(`http://localhost:3000/project/${id}`,{
        headers : {
          authorization : user.token
        }
      })
      .then((res)=>{
        window.location.reload();
        alert('Deleted')
      }).catch((err)=>{
        console.log(err);
      })
    }

    const handleUpdate = (id) => {
      console.log(id);
    }

  return (
      <div style={{width : '81%', position : 'absolute', right : '0', paddingTop : '100px'}}>
      <div style={{margin : '30px 100px'}}>
          <Typography variant='h5'>Projects</Typography>
   
      {projects.map(project => {
        return (<div 
        key={project._id}
        style={{display : 'inline-block', minWidth : '400px'}}
        >
         <Card sx={{ maxWidth: 345 }} style={{margin : '30px', borderRadius : '20px'}}>
        <CardMedia
        component="img"
        alt={project.title}
        height="140"
        image={"http://localhost:3000/"+project.projectImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description.substring(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        {user.isLogged && <Button onClick={()=>handleDelete(project._id)} size="small">Delete</Button>}
        {user.isLogged && <EditProject id = {project._id}/>}
        <Button onClick={()=>{
          window.location.replace(project.link)
        }} size="small">Link</Button>
      </CardActions>
    </Card>
    </div>)
      })}
      
    </div>
    <div style={{textAlign : 'center', marginBottom : '100px'}}>
    {user.isLogged && <AddProjects/>}
    </div>
    </div>
  );
}

