import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");

  const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:8001";

  console.log("Server URL:", SERVER_URL);

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
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="url">Enter the URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>Your short id is: {shortId}</p>
      </div>

      <div>
  <p>
    Your shortened URL is:{" "}
    <a href={`http://localhost:8001/${shortId}`} target="_blank" rel="noopener noreferrer">
      http://localhost:8001/{shortId}
    </a>
  </p>
</div>

    </>
  );
}
