import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { handleGenerateNewShortURL } from '../../server/controllers/controller';

export default function Home() {


  const sendData={
    
  }
    
      return (
        <>
        <div>
          <form action="" method='post'>
            <label htmlFor="url">Enter the url:</label>
            <input type="text" id='url'/>
            <button type='submit' onSubmit={handleGenerateNewShortURL}>Submit</button>
          </form>
        </div>
        </>
      );
    };

