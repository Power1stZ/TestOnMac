import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

export const Home = () =>{
    const [name,setName] = useState("");
    const userName=()=>{
        setName(document.getElementById("myInput").value)
        localStorage.setItem("user",name)
        //console.log("df"+localStorage.getItem("user"));
        //console.log(name)
    }
    return (
        <div>
            <h1>Please enter Your Name</h1>
            <input id="myInput" type="text" placeholder="Name Surname" />
            <button onClick={ userName } ><Link to="/menu">Use It!!</Link></button>
        {name}

        </div>
        )
}