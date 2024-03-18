import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import CookCount from './components/Cook/CookCount'
import Foods from './components/Food/Foods'
import Header from './components/Header/Header'
import Recipie from './components/Header/Recipie'
import Cooking from './components/Cooking/Cooking'


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
    <div>
    <div className='flex w-full mt-20'>
    <Foods handelAddfood ={handelAddfood}></Foods>
    <div className='mt-20 w-2/4 shadow-2xl rounded-3xl '>
    
    <CookCount foods={foodys}></CookCount>
     
    <Cooking></Cooking>
    </div>
   
    </div> 
    </div>
    </div>
    
    </>
  )
}

export default App
