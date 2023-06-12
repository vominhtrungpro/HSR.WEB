import Navbar from '../../components/navbar';
import axios from "axios";
import React, { useState, useEffect } from "react";


function Characters() {
  const [filters, setFilter] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:1994/api/v1/elements/filter`)
      .then((res) => {
        setFilter(res.data);
      });
  }, []);
    return (
        <div className="App">
          <Navbar  />
          <div className="App-header">
          </div>
        </div>
      );
}

export default Characters;