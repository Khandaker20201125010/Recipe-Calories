import React, { useEffect, useState } from 'react';
import CookFood from '../Foods/CookFood';


const Foods = ({handelAddfood}) => {
    const [foods,setFoods] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then (data =>setFoods(data))
    },[])
    return (
        <div className='w-2/3 flex flex-wrap gap-12'> 
         {
            foods.map(foods =><CookFood key={foods.recipe_id} foods={foods} handelAddfood={handelAddfood}></CookFood>)
            
         }
        </div>
    );
};


export default Foods;