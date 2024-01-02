import React from 'react'
import Navegation from './Config/Navegation'
import './App.css'
import { useNavigate } from 'react-router-dom'

import logo from '../src/Assets/logo.png'

function App() {
const nav = useNavigate()
  const next1=()=>{
nav('/')
  }

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
   
      <Navegation/>

    </>
  )
}

export default App
