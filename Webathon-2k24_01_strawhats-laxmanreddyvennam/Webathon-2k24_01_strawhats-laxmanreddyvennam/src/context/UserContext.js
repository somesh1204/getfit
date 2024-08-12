import React from 'react'
import { CreateUserContext } from './CreateUserContext';
import axios from 'axios';
import { useState } from 'react';
const UserContext = ({children}) => {
    let [currentuser,setcurrentuser]=useState({})
    let [error,setError]=useState("")
    let [userStatus,setuserStatus]=useState(false)
    let [data,setData]=useState({})
    let extdata={};
    const CreateUser=(userObj)=>{
        setcurrentuser(userObj);
        
        if(userObj.sex=='Male'){
            if(userObj.age<35){
                extdata.cat="Young Male";
            }else if(userObj.age<60){
                extdata.cat="Middle Age Male"
            }else{
                extdata.cat="Old Age Male"
            }
        }else{
            if(userObj.age<35){
                extdata.cat="Young Female";
            }else if(userObj.age<60){
                extdata.cat="Middle Age Female"
            }else{
                extdata.cat="Old Age Female"
            }
        }
        extdata.goal=userObj.fitnessGoal;
        if(userObj.health==""){
            extdata.health="No Health Issues"
        }else{
            extdata.health="Health Issues (Diabetes, Asthma, Heart)"
        }
        console.log(extdata);
        axios
        .post("http://localhost:4000/get-data",extdata)
        .then((response)=>{
            if(response.status===201){
                setData(response.data.payload);
                console.log(data);
            }else{
              setError(response.data.message)
            }
          })
          .catch((error)=>{
            setError(error.message)
          })

          setuserStatus(true)
    };
  return (
    <div>
        <CreateUserContext.Provider value={[currentuser,error,userStatus,data,CreateUser]}>
            {children}
        </CreateUserContext.Provider>
    </div>
  )
};

export default UserContext;
