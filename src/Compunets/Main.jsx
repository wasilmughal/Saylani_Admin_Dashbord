import React from 'react'
import Navegation from '../Config/Navegation'
import { useNavigate } from 'react-router-dom'


function Main() {
const nav = useNavigate()
 

  const next2=()=>{
    nav('/AddPost')
      }

      const next3=()=>{
        nav('/Showcards')
          }

          const next4=()=>{
            nav('/kidscollect')
              }

              const next5=()=>{
                nav('/AddVideo')
                  }
    
const next6 =()=>{
  nav('/trems')
}
    
const next7 =()=>{
  nav('/priv')
}       

  return (
    <>
    <div style={{position:"fixed"}}>
    <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width:"20%"}} >
<img src="https://iconape.com/wp-content/files/pd/194086/svg/194086.svg" style={{width:"200px",marginTop:"30px",marginLeft:"20px"}} />
  <ul >
    {/* <li ><button  onClick={()=>next1()}   >Dashbord</button>  </li> */}
    <li ><button  onClick={()=>next2()}   style={{fontWeight:"bold",color:"#0369a1"}} >Add Post </button> </li>
    <li ><button  onClick={()=>next5()}   style={{fontWeight:"bold",color:"#0369a1"}} >Add Videos </button> </li>
    <li ><button   onClick={()=>next3()}  style={{fontWeight:"bold",color:"#0369a1"}}  >Donations</button> </li>
    <li ><button   onClick={()=>next4()}   style={{fontWeight:"bold",color:"#0369a1"}} >Requests</button> </li>
    <li ><button   onClick={()=>next6()}   style={{fontWeight:"bold",color:"#0369a1"}} >Add trems</button> </li>
    <li ><button   onClick={()=>next7()}   style={{fontWeight:"bold",color:"#0369a1"}} >Add Privacy</button> </li>


    

  </ul>
</div>
      </div>
      <Navegation/>

    </>
  )
}

export default Main
