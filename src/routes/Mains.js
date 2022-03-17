import React, { useEffect, useState } from 'react';
import { getData } from '../utilities/data';
import { getLocalStorage, setLocalStorage } from '../utilities/localStorage';

export default function Mains() {
    const [mains, setMains] = useState ([]);


    useEffect(() => {
        let data = getLocalStorage();
        if (data.length > 0) {
            setMains(data);
        } else {
            getData()
            .then((data) => {
                setMains(data);
                setLocalStorage(data)
            })
        }
    }, []);

    let mainDishes = mains.map((maindish) => {
    return <mains key={maindish.id} maindish={maindish} />;
    })

    return (
        <div>
            <h1>Welcome to the Mains page</h1>
        </div>
    )
}