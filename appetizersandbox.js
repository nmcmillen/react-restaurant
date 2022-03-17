import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ShowAppetizer = () => {
    const [appetizers, setAppetizers] = useState([]);
        useEffect(() => {
        fetchAppetizers();
        }, []);

    const fetchAppetizers = () => {
    axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
    .then((response) => {
      console.log("Appetizer page", response);
      setAppetizers(response.data)
    })
    .catch((err) => {
      console.log("fetch error", err);
    });
    // };

    let appetizersList = appetizers.map((displayApps) => {
        return <Apps key={displayApps.id} displayApps={displayApps} />
    })

    return (
        <main style = {{ padding: "1rem 0"}} className="container">
            <div className="row justify-content-center text-center gap-2">
                <h2>APPETIZER H2</h2>
                {appetizersList}
            </div>
        </main>
    )
}

const Apps = ({ displayApps }) => {
    return (
      <div className='card col-5 p-3'>
            <div className='card'>
            <h2>{displayApps.title}</h2>
            <h4>{displayApps.price}</h4>
            <p>{displayApps.description}</p>
            <p>{displayApps.cuisine.label}</p>
            <p>{displayApps.category.title}</p>
            </div>
      </div>
    )
}
}


// return (
//     <div>
//       <h1>Appetizers List</h1>
//       <div className='item-container'>
//         (
//             <div className='card'>
//             <h2>{displayApps.title}</h2>
//             <h4>{displayApps.price}</h4>
//             <p>{displayApps.description}</p>
//             <p>{displayApps.cuisine.label}</p>
//             <p>{displayApps.category.title}</p>
//             </div>
//         ))
//       </div>
//     </div>
//   );
// };

// WORKING BLOCK OF CODE TO GET FOOD ITEMS
// return (
//     <div>
//       <h1>Appetizers List</h1>
//       <div className='item-container'>
//         {appetizers.map((displayApps) => (
//             <div className='card'>
//             <h2>{displayApps.title}</h2>
//             <h4>{displayApps.price}</h4>
//             <p>{displayApps.description}</p>
//             <p>{displayApps.cuisine.label}</p>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default ShowAppetizer;