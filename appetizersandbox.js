import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Card, Nav, Button, Col } from 'react-bootstrap'


const ShowAppetizer = () => {
    const [appetizers, setAppetizers] = useState([]);
        useEffect(() => {
        fetchAppetizers();
        }, []);

        
    const fetchAppetizers = () => {
    axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
    .then((response) => {
      console.log("apps", response);
      setAppetizers(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
};


return (
    <div>
      <h1>Appetizers List</h1>
      <div>
        {appetizers.filter((displayApps) => displayApps.category.title == "Appetizer").map((displayApps) => (
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{displayApps.title} - ${displayApps.price}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{displayApps.cuisine.label}</Card.Subtitle>
                <Card.Text>
                {displayApps.description}
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
        ))}
      </div>
    </div>
  );
};

const Wh = ({ tacoItem }) => {
    return (
      <div className="card">
        <p style={{ fontWeight:"bold" }}>{tacoItem.title}</p>
        <div>{tacoItem.price}</div>
        <div>{tacoItem.description}</div>
      </div>
    )
  }
  

export default ShowAppetizer;


{/* 
<h2>{displayApps.title}</h2>
<h4>{displayApps.price}</h4>
<p>{displayApps.description}</p>
<p>{displayApps.cuisine.label}</p> */}


// WORKING FETCH DONT MODIFY
//     const fetchAppetizers = () => {
//     axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
//     .then((response) => {
//       console.log("apps", response);
//       setAppetizers(response.data)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };




// let appList = appetizers.filter((displayApps) => displayApps.category.title == "Appetizer").map((displayApps) => {
//     return <Apps key={displayApps.id} displayApps={displayApps} />;
// });

// return (
//     <main style={{ padding: "1rem 0" }} className="container">
//       <div className="row justify-content-center text-center gap-2">
//         <h2>Apps</h2>
//         {appList}
//       </div>
//     </main>
//   );



// const Apps = ({ displayApps }) => {
//     return (
//         <div className='card col-5 p-3'>
//         <h2>{displayApps.title}</h2>
//         <h4>{displayApps.price}</h4>
//         <p>{displayApps.description}</p>
//         <p>{displayApps.cuisine.label}</p>
//         </div>
//     )
// }