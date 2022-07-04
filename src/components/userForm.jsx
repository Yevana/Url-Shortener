import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
  const [getEmail,setGetEmail] = useState();

  const navigate = useNavigate();

  const OnSubmit =() =>{
    localStorage.setItem('email',getEmail);
    navigate('/urlshort')
  }
  return (
    <div className='card container' style={{width:"30rem", margin:"15rem 35rem",
    backgroundColor: "transparent",
     backdropFilter:"saturate(180%) blur(20px)",
     boxShadow: "5px 5px 5px 5px #332f2f44"}}>
        <form className='p-4 m-3'>
  <div className="form-group ">
    <label for="exampleInputEmail1">Enter Your Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setGetEmail(e.target.value)}/>
  </div>
 
  <button type="button" className="btn btn-info" onClick={OnSubmit} >Submit</button>
</form>
    </div>
  )
}

export default Form