import React, { useState } from "react";
import axios from "axios";
import backgroundImage from '../../public/assets/10-2500x1667.jpg'

export default function MainContent() {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");

  const SERVER_URL =  "http://localhost:8001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${SERVER_URL}/url`, { url });
      setShortId(res.data.id);
    } catch (error) {
      console.error("Error posting the URL:", error.message);
    }
  };

  return (
    <div id="home"
    className="text-center bg-cover bg-center h-screen mx-12 mt-5 mb-12 rounded-2xl"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white font-bold">URL Shortener</h1>
        <p className="text-white text-xl mt-4">
          Paste your untidy link to shorten it
        </p>
        <div >
            
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 ">
          
          <label
            htmlFor="url"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter the URL:
          </label>
          <input
           type="text"
           id="url"
           value={url}
           onChange={(e) => setUrl(e.target.value)}
           placeholder="Enter URL"
           className="p-2 rounded-l-md w-64 md:w-80 hover:scale-105 bg-white"
          />

        
        <button
          type="submit"
          className="bg-violet-800 text-white p-2 rounded-r-md w-36 hover:scale-105 hover:bg-violet-600"
        >
          Shorten
        </button>
      </form>
        </div>
        </div>
    
        {shortId && (
  <div className="mt-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 border border-gray-100">
    <p className="text-gray-700 font-medium">Your shortened URL is:</p>
    <a
      href={`http://localhost:8001/${shortId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 break-all"
    >
      http://localhost:8001/{shortId}
    </a>
    <button
      onClick={() => navigator.clipboard.writeText(`http://localhost:8001/${shortId}`)}
      className="ml-auto px-4 py-2 bg-violet-800 text-white rounded-md hover:bg-violet-600 transition-colors duration-200 hover:scale-105"
    >
      Copy
    </button>
  </div>
)}


      </div>
    </div>
  );
}
