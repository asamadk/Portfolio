import { Avatar, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

function PorfolioUI() {

    const [quote,setQuote] = useState({});

    const getQuote = () => {
        axios.get('https://api.quotable.io/random')
        .then((res)=>{
            setQuote(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    React.useEffect( ()=> {
        getQuote();
    },[]);

    return (
        <div style={{width : '80%', position : 'absolute', right : '0', marginTop : '200px', textAlign : 'center'}}>
            <div style={{borderRadius : '20px' , backgroundColor : '#EEEEEE' , display : 'inline-block', padding : '5px 20px', marginBottom : '20px'}}>
            <Typography variant='h2' style={{fontWeight : '10p'}}>{quote.content}</Typography>
            <Typography variant='body2' >{'-'+quote.author}</Typography>
            </div>
            <Typography>
                {'This is a random generated quotes that will change at each refresh'}
            </Typography>
        </div>
    )
}

export default PorfolioUI
