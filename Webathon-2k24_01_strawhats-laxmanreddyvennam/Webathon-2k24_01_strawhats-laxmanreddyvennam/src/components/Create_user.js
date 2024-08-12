import React, { useEffect } from 'react'
import {useForm } from "react-hook-form";
import { CreateUserContext } from '../context/CreateUserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
function Create_user() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate()
    let [currentuser,error,userStatus,data,CreateUser]=useContext(CreateUserContext)

    let submitform=(data)=>{
        CreateUser(data);
        console.log(data);
    }

    useEffect(()=>{
        if(userStatus===true){
            navigate("/profile");
        }
    },[userStatus])

  return (   
    <div className='container'>
        <h1>Create user</h1>
    <div className='row '>
        <div className=' col-sm-4 col-m-6  mx-auto ml-20 mr-20'>
            <form onSubmit={handleSubmit(submitform)}>
                <div className=' mb-3 bg-dark'>
                    <input className="form-control " type='text' id='name' placeholder='Name'required {...register("username")}/>
                </div>
                <div className='mb-3 bg-dark'>
                    <input className="form-control mr-3 " type='number' id='weight' placeholder='Actual Weight'required {...register("weight",{
                  validate: value => value >= 0 || "weight must be positive",
                })}/>
                {errors.weight && <span className="text-danger">{errors.weight.message}</span>}

                {errors.newWeight && <span className="text-danger ">{errors.newWeight.message}</span>}
                </div>
                <div className='mb-3 d-flex gap-5 '>
                    <input  className="form-control mr-3" type='number' id='Age' placeholder='Age'required {...register("age",{
                  validate: value => (value >= 0 && value<=100) || "Age not valid",
                })}/>
                {errors.Age && <span className="text-danger">{errors.Age.message}</span>}

                    <select className='form-control ml-6 ' id='sex' placeholder='sex'{...register("sex")}>
                        <option value='default'>sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className='mb-3 bg-dark'>
                    <input className='form-control' type='text' id='health' placeholder='Health Status'{...register('health')}>
                    </input>
                </div>
                <div className='mb-3 bg-dark'>
                    <select  className='form-control' id="activityLevel" placeholder='activity level'{...register("activityLevel")}>
                        <option value='default'>activity level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div className='mb-3 bg-dark'>
                    <select className='form-control' id='Fitness Goal' placeholder='Goal' {...register('fitnessGoal')}>
                        <option value='default'>Set Your Goal</option>
                        <option value="Weight Gain">Weight Gain</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Strength">Strenght</option>
                    </select>
                </div>
                <button type='submit' className='bg-success'>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Create_user