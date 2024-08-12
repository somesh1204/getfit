import React from 'react'
import { useContext } from 'react';
import { CreateUserContext } from '../context/CreateUserContext';
import { useNavigate } from 'react-router-dom';
import "./Profile.css"
function Profile() {
  let [currentuser,error,userStatus,data,CreateUser]=useContext(CreateUserContext)
  const navigate = useNavigate();
  
  function handleSubmit(e){
    navigate("/dashboard")
  }
  return (
    <div id="profile">
      <h2>User Summary</h2>
      <ul>
        <li>Username: {currentuser.username}</li>
        <li>Age: {currentuser.age}</li>
        <li>Sex: {currentuser.sex}</li>
        <li>Weight: {currentuser.weight} kg</li>
        <li>Activity Level: {currentuser.activityLevel}</li>
        <li>Fitness Goal: {currentuser.fitnessGoal}</li>
        <li>Health: {currentuser.health}</li>
      </ul>
      <button type="button" onClick={handleSubmit} >Dashboard</button>
</div>
  )
}

export default Profile