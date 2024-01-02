import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Dasbord from '../Compunets/Dasbord'
import Phone from '../Compunets/AddPost'
// import Oders from '../Compunets/Oders'
import ShowCards from '../Compunets/Donation'
import KidsCollect from '../Compunets/Request'
import Order from '../Compunets/Order'
import Videos from '../Compunets/AddVideo'
import Trams from '../Compunets/Trams'
import Privce from '../Compunets/Privee'

import Main from '../Compunets/Main'
import { Login } from '../Compunets/Login'

function Navegation() {
  return (
    <div>
     <Routes>
         {/* <Route path='/' element={<Dasbord/>}></Route> */}
         <Route path='/' element={<Login/>}></Route>
         <Route path='/main' element={<Main/>}></Route>



        <Route path='/AddPost' element={<Phone/>}></Route>
        <Route path='/AddVideo' element={<Videos/>}></Route>

        {/* <Route path='/Oders' element={<Oders/>}></Route> */}
        <Route path='/Showcards' element={<ShowCards/>}></Route>
        <Route path='/kidscollect' element={<KidsCollect/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/trems' element={<Trams/>}></Route>
        <Route path='/priv' element={<Privce/>}></Route>






        </Routes> 

    </div>
  )
}

export default Navegation

