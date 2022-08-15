import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap'
import { getData } from '../utilities/data';

export default function Main () {
    const [ mains, setMains ] = useState([]);

    useEffect(() => {
        getData()
        .then((data) => {
            setMains(data)
        })
    }, []);
    
    let mainList = mains.filter((displayMenu) => (displayMenu.category.title === "Burgers" || "Sandwiches" || "Pasta" || "House Favorites") && displayMenu.cuisine.label === "American").map((displayMenu) => {
    return <Apps key={displayMenu.id} displayMenu={displayMenu} />;
    });

    return (
        <main style={{ padding: "1rem 0" }} className="container">
          <div className="row justify-content-center text-center gap-2">
            <h2>Main Dishes</h2>
            {mainList}
          </div>
        </main>
      );
}
// END OF MENU FUNCTION

const Apps = ({ displayMenu }) => {
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