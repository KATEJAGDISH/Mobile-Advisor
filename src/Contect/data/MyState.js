import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "axios";

function MyState({ children }) {
    const [items, setItems] = useState([]);


    useEffect(() => {
        // Fetch data from the API
        axios.get('http://localhost:3001/result')
            .then(response => {
                // Set the fetched data to the state
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <MyContext.Provider value={items}>
            {children}
        </MyContext.Provider>
    );
}
export default MyState;