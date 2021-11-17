import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Home = () => {
    const history = useHistory()
    return (
        <section className="container">
            <div className="home-wrapper">
                <Button className="btn" onClick={()=>{history.push('/create-user/')}}><ControlPointIcon />Create Users</Button>
            </div>
        </section>
    )
}

export default Home
