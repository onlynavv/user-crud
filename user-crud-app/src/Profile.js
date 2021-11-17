import React from 'react'
import './Profile.css'
import { useHistory,useParams } from 'react-router-dom';
import { useGlobalContext } from './context';
import { Button, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Profile = () => {

    const history = useHistory()
    const {id} = useParams()
    const {userData, profileData} = useGlobalContext()

    const userProfile = userData.find((item)=>{
        return item.id === id
    })

    const userProfileData = profileData.find((item)=>{
        return item.id === id
    })

    return (
        <section className="container">
            <Card className="profile-wrapper">
                <CardContent className="profile-container">
                    <div className="profile-header">
                        <h3>Profile</h3>
                        {userProfileData ? <Button onClick={()=>{history.push(`/edit-profile/${id}`)}} className="btn">Edit Profile</Button> : <Button className="btn" onClick={()=>{history.push(`/add-profile/${id}`)}}>Add Profile</Button>}
                    </div>
                    <div className="profile-body">
                        <div className="profile-left">
                            <div className="user-div">
                                <img src={userProfileData && userProfileData.profile} alt={userProfile.username}></img>
                                <h4>{userProfile.username}</h4>
                            </div>
                            <div>
                                <p><span>Username:</span> {userProfile.username}</p>
                            </div>
                            <div>
                                <p><span>Phone:</span> {userProfileData && userProfileData.phonenumber}</p>
                            </div>
                            <div>
                                <p><span>Email:</span> {userProfile.email}</p>
                            </div>
                            <div>
                                <p><span>Qualification:</span> {userProfileData && userProfileData.qualification}</p>
                            </div>
                            <div>
                                <p><span>Year of Passing:</span> {userProfileData && userProfileData.passyear}</p>
                            </div>
                            <div>
                                <p><span>Year of Experience:</span> {userProfileData && userProfileData.experience}</p>
                            </div>
                        </div>
                        <div className="profile-right">
                            <div>
                                <p><span>Notice Period:</span> {userProfileData && userProfileData.period}</p>
                            </div>
                            <div>
                                <p><span>Github URL:</span> <a href={userProfileData && userProfileData.github} target="_blank">{userProfileData && userProfileData.github}</a></p>
                            </div>
                            <div>
                                <p><span>Profile URL:</span> {userProfileData && userProfileData.profile}</p>
                            </div>
                            <div>
                                <p><span>Location:</span> {userProfileData && userProfileData.location}</p>
                            </div>
                            <div>
                                <Button onClick={()=>{history.goBack()}}><ArrowBackIcon /> Go Back</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Profile
