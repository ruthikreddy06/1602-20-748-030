
import React from 'react'
import { useState } from 'react'
import {useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Login.css';
function Login() {
    const url=`http://20.244.56.144/train/auth`;
    const histroy=useNavigate();

    const [login,setlogin]=useState({ownerEmail:"",rollNo:"",clientSecret:"",clientID:"",comapanyName:"",ownerName:""})
    const fetchuser=async ()=>{
                 
        const response = await fetch(`${url}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ownerEmail:login.ownerEmail,rollNo:login.rollNo,clientSecret:login.clientSecret,clientID:login.clientID,comapanyName:login.comapanyName,ownerName:login.ownerName})
        });
          console.log("login");
          const json= await response.json(); 
           localStorage.setItem('token',json.access_token)
           histroy("/Train")
           console.log(json.access_token)
          
        
      }
      const loginupdate=()=>{
        fetchuser();
      }
    
      const  changes=(e)=>{
        e.preventDefault();
        setlogin({...login,[e.target.name]:e.target.value})
        console.log(login);
     }
  return (
    <div>
        <h1 className='about textcolor'>login</h1>
    <div className='container'>
        
        <div class="row">
        <div class="form-group col-md-6">
    <label for="inputEmail3" class="col-sm-2 col-form-label headings">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="email" name="email" onChange={changes}/>
    </div>
  </div>
   <div class="form-group col-md-6 container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">RollNo</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="rollNo" placeholder="rollno" name="rollNo" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group col-md-6 container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">clientSecret</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="clientSecret" placeholder="clientSceret" name="clientSecret" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group col-md-6 container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">ClientID</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="clientID" placeholder="clientID" name="clientID" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group col-md-6 container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">companyName</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="companyName" placeholder="companyName" name="companyName" onChange={changes}/>
    </div>
   
  </div>
  <div class="form-group col-md-6 container">
    <label for="inputPassword3" class="col-sm-2 col-form-label headings">OwnerName</label>
    <div class="col-sm-10"> 
      <input  class="form-control" id="ownerName" placeholder="ownerName" name="ownerName" onChange={changes}/>
    </div>
   
  </div>
    <div class="col-sm-10 my-4 container">
      <button type="button" class="btn btn-secondary headings" onClick={()=>{loginupdate()}}>login in</button>
      <h7 className='headings'>New?create account</h7>
     
      <Link className="nav-link" to="/Signup"> <button type="button" class="btn btn-link headings">register</button></Link>
    </div>
      
        </div>

  </div>
  </div>
  )
}

export default Login