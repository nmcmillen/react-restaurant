import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ShowAppetizer = () => {
  const [appetizers, setAppetizers] = useState([]);
        useEffect(() => {
        fetchAppetizers();
        }, []);
    const fetchAppetizers = () => {
    axios
    .get('https://sheltered-refuge-85246.herokuapp.com/api/json')
    .then((res) => {
      console.log("apps", res);
      setAppetizers(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

return (
    <div>
      <h1>Appetizers List</h1>
      <div className='item-container'>
        {appetizers.map((displayApps) => (
            <div className='card'>
            <h2>{displayApps.title}</h2>
            <h4>{displayApps.price}</h4>
            <p>{displayApps.description}</p>
            <p>{displayApps.cuisine.label}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAppetizer;