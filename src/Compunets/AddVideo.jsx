import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formik,Field,Form} from 'formik'
import Button from 'react-bootstrap/Button';
import {  storage, db } from "../Config/firebase";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import {  ref } from "firebase/database";
import { push,set } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';




function Videos() {

  const [imgurl,setimgurl]=useState()

  const [imgurl1,setimgurl1]=useState()

  const [imgurl2,setimgurl2]=useState()






const [Category,setCategory] = useState()


// const handleCategory=(e)=>{
// setCategory(e.target.value)

// console.log(Category)
// }







  // const handleupload = (e) => {

  //   console.log(e.target.files[0]);
  
  //   const storageref = sRef(storage, `uploads/${e.target.files[0].name}`);
  
  //   uploadBytes(storageref, e.target.files[0])
  //     .then((snapshot) => {
  //       getDownloadURL(snapshot.ref)
  //         .then((url) => {
  //           console.log(url);
  //           setimgurl(url)
  //           toast.success("Your image Upload...",{
  //             autoClose:2000
  //           })
  //         })
  //         .catch((e) => {});
  //     })
  //     .catch((e) => {});
  // };



  // const handleupload1 = (e) => {

  //   console.log(e.target.files[0]);
  
  //   const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);
  
  //   uploadBytes(storageref, e.target.files[0])
  //     .then((snapshot) => {
  //       getDownloadURL(snapshot.ref)
  //         .then((url) => {
  //           console.log(url);
  //           setimgurl1(url)
  //           toast.success("Your image Upload...",{
  //             autoClose:2000
  //           })
  //         })
  //         .catch((e) => {});
  //     })
  //     .catch((e) => {});
  // };


  // const handleupload2 = (e) => {

  //   console.log(e.target.files[0]);
  
  //   const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);
  
  //   uploadBytes(storageref, e.target.files[0])
  //     .then((snapshot) => {
  //       getDownloadURL(snapshot.ref)
  //         .then((url) => {
  //           console.log(url);
  //           setimgurl2(url)
  //           toast.success("Your image Upload...",{
  //             autoClose:2000
  //           })
  //         })
  //         .catch((e) => {});
  //     })
  //     .catch((e) => {});
  // };




  return (
    <>
    <Sidebar/>
    <div style={{marginLeft:"27%"}}>

<h1 style={{color:"GrayText",padding:"5%"}}>Add Video</h1>


<fieldset style={{border:"1px solid black",width:"70%"}}>
<Formik
initialValues={{
  title:"",
  url:"",
 
}

}

onSubmit={async(v)=>{



let obj


 
    
try {
  let dbref = ref(db,`media`) //ref,path
let newPostRef = push(dbref)

  let obj = {
  title:v.title,
  url:v.url


  };
set(newPostRef,obj)

if(obj!==null){
  toast.success("Your Item has been upload",{
    autoClose:2000
  })
}


}


catch (e) {
  // alert(e.message)
  console.log(e)
  console.log(e.message)
  if(obj==null){

    toast.error("Please Enter Data",{
      autoClose: 2000
    })
}
  }

  
   




}}


>
<Form  className=' m-5'>





  <Field type="text"   placeholder="Title" name="title"   className="form-control" />
<br /> <br /> 





<Field type="text"  placeholder="Enter only Youtube Video Url id" name="url" className="form-control"  /> 

<br /> <br />





{/* <Button variant="outline-success" >Upload</Button> */}
<Button variant="outline-success" type='submit'>Submit</Button>





</Form>


</Formik>




</fieldset>



<ToastContainer />

    </div>
    </>
  )
}

export default Videos







// stotage



