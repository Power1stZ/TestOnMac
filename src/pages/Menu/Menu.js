import React, { useState, useEffect } from "react";
import firebase from "firebase"
import "./Menu.css";
import { Header } from "../../components/Message/Header.js";
import MessageList  from "../../components/Message/MessageList.js";
import  MessageBox  from "../../components/Message/MessageBox.js";

export const Menu = () => {
  const config ={
    apiKey: "AIzaSyBNdO5CORXMID4JAzLxiFlGQRBCZSId_6A",
    authDomain: "chatwithreact-99a98.firebaseapp.com",
    databaseURL: "https://chatwithreact-99a98.firebaseio.com",
    projectId: "chatwithreact-99a98",
    storageBucket: "chatwithreact-99a98.appspot.com",
    messagingSenderId: "389398067646"
  }
  firebase.initializeApp(config);

  return (
    <div className="container">
      <Header title="RPSgame" />
      <div className="column">
        <div className="column3"></div>
        <div className="comlumn6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
      
    </div>
  );
};
