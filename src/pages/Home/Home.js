import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

export const Home = () =>{
    function useLocalState(localItem){
        const [loc,setState] = useState(localStorage.getItem(localItem))
        
        function setLoc(newItem){
            localStorage.setItem(localItem,newItem);
            setState(newItem)
        }

        return [loc,setLoc]
    }
    const [name,setName] = useLocalState('name')
    return (
        <div>
            <h1>Please enter Your Name</h1>
            <input id="myInput" type="text" placeholder="Name Surename" />
            <button onClick= {()=>setName(document.getElementById("myInput").value)} ><Link to="/menu">Use It!!</Link></button>
        {name}

        </div>
        )
}