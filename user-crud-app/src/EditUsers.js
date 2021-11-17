import React,{useEffect} from 'react'
import './EditUsers.css'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useGlobalContext } from './context';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditUsers = () => {
    const {id} = useParams()

    const history = useHistory()

    const {userData,handleChange,handleEdit,singleUser,setSingleUser} = useGlobalContext()

    useEffect(()=>{
        const userDetail = userData.find((item)=>{
        return item.id === id
    })

    setSingleUser({username:userDetail.username,email:userDetail.email,password:userDetail.password})
    },[id])

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
                                <Button onClick={(e)=>handleEdit(e,id)}>Edit User</Button>
                            </div>
                            <div className="btn-div">
                                <Button onClick={()=>{history.goBack()}}><ArrowBackIcon /> Go Back</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default EditUsers
