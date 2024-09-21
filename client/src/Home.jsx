import React from 'react'
import axios from 'axios'
import { useState } from 'react';


export default function Home() {

  const [url,setUrl]=useState('')
  const [shortId,setShortId]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await axios.post('http://localhost:8001/url',{url})
    setShortId(res.data.id);
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

        <div>
          <p>Your short id is:{shortId}</p>
        </div>
        </>
      );
    };

