import React from 'react'
import './AddUsers.css'
import './index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useGlobalContext } from './context';
import { useHistory } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AddUsers = () => {

    const {handleChange,handleSubmit,singleUser} = useGlobalContext()

    const history = useHistory()

    return (
        <>
            <article className="container">
                <Card className="add-user-wrapper">
                    <CardContent className="form-card">
                        <form className="form-div">
                            <div>
                                <label>UserName:</label>
                                <input type="text" placeholder='Enter Username' name="username" value={singleUser.username} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="text" placeholder="Enter Email Address" name="email" value={singleUser.email} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" placeholder="Enter Password" name="password" value={singleUser.password} onChange={handleChange}></input>
                            </div>
                            <div className="btn-div">
                                <Button onClick={(e)=>handleSubmit(e)}>Add User</Button>
                            </div>
                            <div>
                                <Button onClick={()=>{history.push('/users/')}}><VisibilityIcon /> View Users List</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default AddUsers
