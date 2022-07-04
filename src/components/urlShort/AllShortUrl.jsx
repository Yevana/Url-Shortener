import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllShortUrl(props) {
    
    const[getAllUrl,setGetAllUrl] =useState([])

    const urlUpdate =props.shortUrl

  const email = localStorage.getItem('email');


    const getallURL = () => {

        const data = {
            email: email
          };
          
          const config = {
            method: 'post',
            url: 'https://shorturlnodejs.herokuapp.com/api/GetAllShortUrl',
            headers: { 
              'id': '', 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
        axios(config).then((response)=>{
        setGetAllUrl(response.data);
        }).catch((error)=>{
            console.error(error.message)
        })
    }

    const openNewTab = (url) => {

        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    
        if (newWindow) newWindow.opener = null
    
      }


const redriectUrl = (item) =>{
    axios.get(`https://shorturlnodejs.herokuapp.com/api/${item}`).then((response)=>{
        getallURL();
        openNewTab(response.data);
        }).catch((error)=>{
            console.error(error.message)
        })
}
useEffect(()=>{
    getallURL()
},[urlUpdate]);


  return (
    <div className='card' style={{width:"60rem",margin:"1rem 18rem",border:"none"}}>

<table className="table">
  <thead className='thead-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Long URl</th>
      <th scope="col">Shor Code</th>
      <th scope="col">No of Visit</th>
    </tr>
  </thead>
  <tbody>
{/* 
  <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div> */}
    {getAllUrl.map((item,index)=>{
        return(<>
    <tr key={item.id}>
      <th scope="row">{index+1}</th>
      <td><a className='nav-link'> {item.longurl}</a> </td>
      <td><a className='nav-link' onClick={() => {redriectUrl(item.shortUrlCode)}}> {item.shortUrlCode}</a> </td>
      <td>{item.visit}</td>
    </tr>    
        </>)
    })}
    
    
  </tbody>
</table>
    </div>
  )
}

export default AllShortUrl