import React, { useState, useEffect } from "react";
import DataService from "./services/service";
import './App.css';

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    DataService.helloWorld()
    .then((response) => {
      setMessage(response.data)
    })
    .catch((e) => {
      console.log(e);
    });
  }, [])

  return (
    <div>
      {message ? message : ""}
    </div>
  );
}

export default App;
