import React, { useState } from 'react'
import axios from 'axios'
import AllShortUrl from './AllShortUrl';

function Urlshortener() {

    const [getUrl,setGetUrl] = useState();

    const [update,setUpdate] = useState(false);


  const email = localStorage.getItem('email');

    const onShortUrl = () => {
      
var data = {
  longurl: getUrl,
  email: email
};

var config = {
  method: 'post',
  url: 'https://shorturlnodejs.herokuapp.com/api/getUrl',
  headers: { 
    'id': '', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  setUpdate(true);
  alert("URl Short is successfully Done")

})
.catch((error) => {
});

    }
  return (
    <>
      <div className='card container' style={{width:"30rem", margin:"2rem 33rem",
    backgroundColor: "transparent",
     backdropFilter:"saturate(180%) blur(20px)",
     boxShadow: "2px 2px 2px 2px rgb(183, 168, 168)"}}>
        <form className='p-4 m-3'>
  <div className="form-group ">
    <label for="exampleInputEmail1">Enter Full URl</label>
    <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setGetUrl(e.target.value)} />
  </div>
 
  <button type='button' className="btn btn-success" style={{margin:"0 19rem"}} onClick={onShortUrl}>Short</button>
</form>
    </div>

    <AllShortUrl shortUrl={update} />
    </>
  )
}

export default Urlshortener