// InputForm.js
import React, { useState } from 'react';
import {  storage, db } from "../Config/firebase";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import {  ref } from "firebase/database";
import { push,set } from 'firebase/database';
import Sidebar from './Sidebar';

const Privce = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Save the inputText to Firebase
    let dbref = ref(db,`privac`) //ref,path
    let newPostRef = push(dbref) // Replace with your Firebase path
    set(newPostRef, { text: inputText })
      .then(() => {
        console.log('Data saved successfully!');
        setInputText(''); // Clear the input field after submission
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
    <Sidebar/>
    <div style={{marginLeft:"27%"}}>
    <h1 style={{padding:"5%"}}>Add Privacy Policy </h1>
    <label style={{fontWeight:"bold"}}>
      Enter trem:
    </label>
    <br />
    <br />
    <input style={{width:50+"%",borderRadius:20,height:50, borderWidth:2,borderColor:"black"}} type="text" value={inputText} onChange={handleInputChange} />
<br />
<br />
    <button style={{backgroundColor:"#0963a1",padding:10,borderRadius:20,width:200,color:"white",fontWeight:"bold"}} onClick={handleSubmit}>Submit</button>
  </div>
  </>
  );
};

export default  Privce;
