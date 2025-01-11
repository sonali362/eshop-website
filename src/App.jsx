import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Category from './assets/Components/Category/Category'
import Category2 from './assets/Components/Category2/Category2'
import Services from './assets/Components/Services/Services'

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-900
     dark:text-white duration-200 overflow-hidden">
       <Navbar/>
       <Hero />
       <Category/>
       <Category2/>
       <Services/>
    </div>
  )
}

export default App
