import React,{useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useGlobalContext } from './context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import './EditProfile.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditProfile = () => {

    const {id} = useParams()

    const history = useHistory()

    const {profileData,userProfile,setUserProfile,handleProfileChange,handleEditProfile} = useGlobalContext()

    useEffect(()=>{
        const singleProfile = profileData.find((item)=>{
            return item.id === id
        })

        setUserProfile({phonenumber:singleProfile.phonenumber,qualification:singleProfile.qualification,passyear:singleProfile.passyear,experience:singleProfile.experience,period:singleProfile.period,github:singleProfile.github,profile:singleProfile.profile,location:singleProfile.location})
    },[id])


    return (
        <>
            <article className="container">
                <Card className="edit-profile-wrapper">
                    <CardContent className="form-card">
                        <form className="form-div">
                            <h3>Enter Details</h3>
                            <div>
                                <label>Phone Number:</label>
                                <input type="text" placeholder="Enter Phone Number" name="phonenumber" onChange={handleProfileChange} value={userProfile.phonenumber}></input>
                            </div>
                            <div>
                                <label>Qualification:</label>
                                <input type="text" placeholder="Enter Qualification" name="qualification" onChange={handleProfileChange} value={userProfile.qualification}></input>
                            </div>
                            <div>
                                <label>Year of Passing:</label>
                                <input type="text" placeholder="0" name="passyear" onChange={handleProfileChange} value={userProfile.passyear}></input>
                            </div>
                            <div>
                                <label>Year of Experience:</label>
                                <input type="text" placeholder="0" name="experience" onChange={handleProfileChange} value={userProfile.experience}></input>
                            </div>
                            <div>
                                <label>Notice Period:</label>
                                <input type="text" placeholder="0" name="period" onChange={handleProfileChange} value={userProfile.period}></input>
                            </div>
                            <div>
                                <label>Github URL:</label>
                                <input type="text" placeholder="Enter Github URL" name="github" onChange={handleProfileChange} value={userProfile.github}></input>
                            </div>
                            <div>
                                <label>Profile Image URL:</label>
                                <input type="text" placeholder="Enter Profile Image URL" name="profile" onChange={handleProfileChange} value={userProfile.profile}></input>
                            </div>
                            <div>
                                <label>Location:</label>
                                <input type="text" placeholder="Enter Location" name="location" onChange={handleProfileChange} value={userProfile.location}></input>
                            </div>
                            <div className="btn-div">
                                <Button onClick={(e)=>{handleEditProfile(e,id)}}>Edit Profile</Button>
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

export default EditProfile
