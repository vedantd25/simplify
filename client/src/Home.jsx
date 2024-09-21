import React from 'react'
import axios from 'axios'
import { useState } from 'react';


export default function Home() {

  const [url,setUrl]=useState('')
  const handleSubmit=(e)=>{

    e.preventDefault()
    axios.post('http://localhost:8001/url',{url})
    console.log("Data posted to API")
  }

    
      return (
        <>
        <div>
          <form action="" method='post' onSubmit={handleSubmit}>
            <label htmlFor="url">Enter the url:</label>
            <input type="text" id='url' value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
            <button type='submit' >Submit</button>
          </form>
        </div>

        
        </>
      );
    };

