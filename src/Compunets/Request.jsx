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


function KidsCollect() {

const [data,setdata] = useState([])


useEffect(()=>{



  
    let data1 = ref(db,"users/requset/")

    get(data1).then((snap) => {
        console.log(snap.val())
        if(snap.val()!=null){
       console.log(Object.values(snap.val()));
       setdata(Object.values(snap.val()))
        }

    })
        .catch((e) => console.log(e.code))
  
      
},[])



const handleDelete=(key)=>{
    // let data1 = ref(db,`kids_Collection${key}`)
 let data1 = ref(db,`kids_Collection/${key}`)
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
      
      <h1 style={{color:"#0369a1",padding:"5%"}}>Request</h1>

     <Table responsive="lg">
     <thead>
          <tr >
            <th style={{color:"#0963a1"}}>S No</th>
            <th style={{color:"#0963a1"}}>Name</th>
            <th style={{color:"#0963a1"}}>Email</th>
            <th style={{color:"#0963a1"}}>Phone</th>
            <th style={{color:"green"}}>CNIC</th>
            <th style={{color:"#0963a1"}}>Additional Info </th>
            <th style={{color:"#0963a1"}}>Request</th>
          </tr>
        </thead>
<tbody>
{



  data.map((v,i)=>{
return(
  <>
      <tr>
      <td>{i}</td>
    <td>{v.Name}</td>
    <td>{v.email ? v.email : "Email Not Found !"}</td>
    <td>{v.phoneNumber}</td>
    <td>{v.cnic}</td>
    <td>{v.description}</td>
    <td style={{ color:"red"}}>{v.formtype ? v.formtype : v.bloodGroup  }</td>
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













export default KidsCollect
