import React, { useEffect, useState } from 'react';
import CookFood from '../Foods/CookFood';


const Foods = ({handelAddfood}) => {
    const [foods,setFoods] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then (data =>setFoods(data))
    },[]);
   
    return (
        <div className='w-full flex flex-wrap gap-2'> 
         {
            foods.map((foods,idx) =><CookFood key={idx} foods={foods} handelAddfood={handelAddfood}></CookFood>)
            
         }
        </div>
    );
};


export default Foods;