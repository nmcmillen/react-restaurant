import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { getData } from '../utilities/data';

export default function Dessert () {
    const [ desserts, setDesserts ] = useState([]);

    useEffect(() => {
        getData()
        .then((data) => {
            setDesserts(data)
        })
    }, []);
    
    let dessertList = desserts.filter((displayMenu) => displayMenu.category.title === "Dessert" ).map((displayMenu) => {
    return <Desserts key={displayMenu.id} displayMenu={displayMenu} />;
    });

    return (
        <main style={{ padding: "1rem 0" }} className="container">
          <div className="row justify-content-center text-center gap-2">
            <h2>Desserts</h2>
            {dessertList}
          </div>
        </main>
      );
}
// END OF MENU FUNCTION

const Desserts = ({ displayMenu }) => {
    return (
        <Card className='card col-5 p-1'>
            <Card.Body>
                <Card.Title>{displayMenu.title} - ${displayMenu.price}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{displayMenu.cuisine.label}</Card.Subtitle>
                <Card.Text>
                    {displayMenu.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}