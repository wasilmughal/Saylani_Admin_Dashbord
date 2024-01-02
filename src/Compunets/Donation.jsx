import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {  ref,get} from "firebase/database";
import { remove } from 'firebase/database';

import { db } from '../Config/firebase';
import Button from 'react-bootstrap/Button';
// import "./ShowCards.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';






function ShowCards() {

  
const [data,setdata] = useState([])

const [totalAmount, setTotalAmount] = useState(0);






useEffect(()=>{
 let data1 = ref(db,"users/donate/")

    get(data1).then((snap) => {
        console.log(snap.val())
        if(snap.val()!=null){
       console.log(Object.values(snap.val()));
       setdata(Object.values(snap.val()))
        }
          // Calculate the total amount by summing up 'amount' in each object
         
          total()


    })
        .catch((e) => console.log(e.code))
  

},[])

const total =()=>{
  const sum = data.reduce((accumulator, currentObject) => {
    // Ensure 'amount' is a number before adding to the accumulator
    const amount = typeof currentObject.amount === 'number' ? currentObject.amount : 0;
    return accumulator + amount;
  }, 0);

  setTotalAmount(sum);
}


const handleDelete=(key)=>{
  console.log(key)
  let data1 = ref(db,`Men_Collection/${key}`)
  remove(data1)
  toast.success("Item has been Deleted",{
    autoClose:1000
  })
  


}





console.log(data)

// console.log(data.length)
  return (


    <>
    <Sidebar/>
    <div style={{marginLeft:'25%',position: 'relative' }}>
      
      <h1 style={{color:"#0369a1",padding:"5%"}}>Donation</h1>

      <h4 style={{}}>Total Donation : {totalAmount}</h4>

     <Table responsive="lg">
     <thead>
          <tr>
            <th style={{color:"#0963a1"}}>S No</th>
            <th style={{color:"#0963a1"}}>Name</th>
            <th style={{color:"#0963a1"}}>Email</th>
            <th style={{color:"#0963a1"}}>Phone</th>
            <th style={{color:"#0963a1"}}>Country</th>
            <th style={{color:"#0963a1"}}>Additional Info </th>
            <th style={{color:"#0963a1"}}>Amount</th>
          </tr>
        </thead>
<tbody>
{



  data.map((v,i)=>{
return(
  <>
      <tr>
    <td>{i}</td>
    <td>{v.name}</td>
    <td>{v.email}</td>
    <td>{v.phone}</td>
    <td>{v.country}</td>
    <td>{v.additionalinfo}</td>
    <td style={{ color:"green" ,fontWeight:"bold"}}>{v.amount}</td>
{/* <td> <Button onClick={()=>handleDelete(v.key)} variant="danger">Delete</Button>  </td> */}

  </tr>
  </>
)

  })
}



</tbody>




      
      </Table>

<ToastContainer/>
    
    </div>
    </>
  )
}













export default ShowCards
