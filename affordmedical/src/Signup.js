

import React from 'react'
import { useState } from 'react'
import {useNavigate } from 'react-router';

import './Login.css';
function Signup() {
    const url=`http://20.244.56.144/train/register`;
    const histroy=useNavigate();

    const [signup,setsignup]=useState({ownerEmail:"",rollNo:"",accessCode:"",comapanyName:"",ownerName:""})
    const registeruser=async ()=>{
                 
        const response = await fetch(`${url}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ownerEmail:signup.ownerEmail,rollNo:signup.rollNo,accessCode:signup.accessCode,comapanyName:signup.comapanyName,ownerName:signup.ownerName})
        });
          console.log("signup");
          const json= await response.json(); 
      }
      const signupfunc=async()=>{
       await registeruser();
       histroy("/")
      }
    
      const  changes=(e)=>{
        e.preventDefault();
        setsignup({...signup,[e.target.name]:e.target.value})
        console.log(signup);
     }
  return (
    <div>
        <h1 className='about textcolor'>Register</h1>
    <div className='container'>
        
        <div class="row">
        <div class="form-group  container">
    <label for="inputEmail3" class="col-sm-2 col-form-label headings">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="email" name="email" onChange={changes}/>
    </div>
  </div>
   <div class="form-group  container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">RollNo</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="rollNo" placeholder="rollno" name="rollNo" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group  container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">accessCode</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="accessCode" placeholder="accessCode" name="accessCode" onChange={changes}/>
    </div>
   
  </div>
  
  <div class="form-group  container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">companyName</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="companyName" placeholder="companyName" name="companyName" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group  container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">OwnerName</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="ownerName" placeholder="ownerName" name="ownerName" onChange={changes}/>
    </div>
   
  </div>
  <div class="col-sm-10 my-4 container">
      <button type="button" class="btn btn-secondary headings" onClick={signupfunc}>register</button>
    </div>
   
      
        </div>

  </div>
  </div>
  )
}

export default Signup;