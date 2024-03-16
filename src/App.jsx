import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import CookCount from './components/Cook/CookCount'
import Foods from './components/Food/Foods'
import Header from './components/Header/Header'
import Recipie from './components/Header/Recipie'

function App() {
  const [foodys,setfoods] = useState([])
  const handelAddfood =  foods =>{
  const newFoods =[...foodys,foods];
  setfoods(newFoods);

  }
  return (
    <>
    <div className='lg:container lg:mx-auto sm:container sm:mx-auto mt-10 lexend-uniquifier'>
    <Header></Header> 
    <Banner></Banner>
    <Recipie></Recipie>
    <div className='flex mt-20'>
    <Foods handelAddfood ={handelAddfood}></Foods>
    <div className='mt-20 '>
    <CookCount foods={foodys}></CookCount>
    </div> 
    </div>
    </div>
    
    </>
  )
}

export default App
