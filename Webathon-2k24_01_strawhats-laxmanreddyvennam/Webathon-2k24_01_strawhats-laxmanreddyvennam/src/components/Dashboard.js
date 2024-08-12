import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { CreateUserContext } from '../context/CreateUserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  let [currentuser,error,userStatus,data,CreateUser]=useContext(CreateUserContext)
    let [day,setday]=useState("");
    const navigate=useNavigate()
    let userObj=currentuser; 
    let valuesArray=[];
    if(data==null){
        <h1>Invalid data</h1>
    }else{
        valuesArray= Object.values(data);
    }
    
    function handleNutrition() {
        navigate("/nutrition");
    }
    function handleMonday()
    {
        setday(valuesArray[8]);
    }
    function handleTuesday()
     {
        setday(valuesArray[9]);
    }
    function handleWednesday()
     {
        setday(valuesArray[10]);
    }
    function handleThursday()
     {
        setday(valuesArray[11]);
    }
    function handleFriday()
     {
        setday(valuesArray[12]);
    }
    
    function handleSaturday()
     {
        setday(valuesArray[13]);
    }
    function handleSunday()
     {
        setday("Rest");
    }
    function handleProfile() {
      navigate("/profile")
    }
  return (
    <div>
        <div className="row">
            <div className="col-sm-8 col-md-9 col-lg-8 bg-dark text-white ">
                <h1 className=''>GET FIT</h1>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 bg-dark text-white ml-10">
                <button className="green" onClick={handleNutrition}>Nutrition</button>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-3 bg-dark text-white ml-10">
                <button className="green" onClick={handleProfile}>profile</button>
            </div>
        </div>
        <div className="row  container h-100">
            <div className="col-sm-2 col-md-3 col-lg-4 bg-secondary text-white mt-10">
                    <h2 className='bg-warning'>Day</h2>
                <div className="text-blue ">
                    <button className="badge text-bg-primary s-100% h-100%" onClick={handleMonday}>MONDAY</button>
                    <div className="col-sm-6 col-md-5 col-lg-4 bg-info mt-100">
                    </div>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%" onClick={handleTuesday}>TUESDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100% "onClick={handleWednesday}>WEDNESDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleThursday}>THURSDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleFriday}>FRIDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleSaturday}>SATURDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleSunday}>SUNDAY</button>
                </div>
            </div>
                    
            <div className="col-sm-6 col-md-5 col-lg-4  mt-100">
            <h2 className='bg-warning'>Work Out</h2>
            {day}
            </div>
                    
            <div className="col-sm-6 col-md-5 col-lg-4  mt-100">
            <h2 className='bg-warning'>Nutrition</h2>
                <div><h3>BreakFast: </h3>{valuesArray[5]}</div>
                <div><h3>Lunch: </h3>{valuesArray[6]}</div>
                <div><h3>Dinner: </h3>{valuesArray[7]}</div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard