import React from 'react'
import AddSkill from '../Component/AddSkill'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { Card, Typography } from '@mui/material';
import EditSkill from '../Component/EditSkill';

function SkillAdmin() {

    const user = JSON.parse(localStorage.getItem("userData"));
    const [skill,setSkill] = React.useState([]);
    const [open,setOpen] = React.useState(false);
    const [skillId,setSkillId] = React.useState('');

    const getSkills = () => {
        axios.get('http://localhost:3000/skills/')
        .then((res) => {
            setSkill(res.data)
        })
    }

    React.useEffect(()=>{
        getSkills();
    },[])


    const handleDelete = (id) => {
        console.log("IN DELETE",id)
        const user = JSON.parse(localStorage.getItem('userData'));
        if(user.isLogged){
            axios.delete(`http://localhost:3000/skills/${id}`,{ 
                headers : {
                    authorization : user.token
                }
            })
            .then((res) => {
                alert("Deleted");
                window.location.reload();
            })
        }
    }

    const handleEdit = (id) => {
        setOpen(true);
        setSkillId(id);
    }

    return (
        <div style={{width : '80%', position : 'absolute', right : '0', paddingTop : '100px'}}>
            <div style={{ margin: '50px 200px'}}>
            <Typography variant='h5' style={{margin : '10px'}}>Skills</Typography>
            <Card style={{borderRadius : '20px', padding : '20px'}}>
            {
            skill.map((singleSkill) => <Chip
                style={{margin : "10px"}}
                key={singleSkill._id}
                avatar={<Avatar>{singleSkill.name.substring(0,1)}</Avatar>} 
                label = {singleSkill.name}
                onDoubleClick = {(e)=>{handleEdit(singleSkill._id)}}
                onDelete={()=>handleDelete(singleSkill._id)}
                />
            )
        }
        </Card>
        </div>
        <div style={{margin : "10px" , textAlign : "center"}}>
            {user.isLogged && <AddSkill/>}
        </div>
        <div style={{margin : '10px' , textAlign : 'center', marginBottom : '100px'}}>
            {user.isLogged && open && <EditSkill id = {skillId} close = {()=> {setOpen(false)}}/>}
        </div>
        </div>
    )
}

export default SkillAdmin
