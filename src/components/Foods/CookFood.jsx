import React, { useState } from 'react';
import shedule from "../../assets/images/schedule.png";
import barn from "../../assets/images/burn.png";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CookFood = ({ foods, handelAddfood }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = foods;
    const [isOrderShown, setisOrderShown] = useState(false);
    const handleCookFoodClick = () => {
        if (isOrderShown) {
            toast("Already ordered ");
        } else {
            handelAddfood(foods);
            setisOrderShown(true);
        }
    };

    return (
        <div className='mt-20 bg-slate-200 rounded-2xl'>
            <div className="card w-96 shadow-2xl">
                <figure><img src={recipe_image} alt="Shoes" className='rounded-3xl w-[350px] h-[220px] mt-10' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <h2 className='font-bold mt-8'>Ingredients: {ingredients.length}</h2>
                    <div className='mt-2'>
                        <ul className='marker:text-gray-500 list-disc pl-5 space-y-3 text-slate-400'>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-2 mt-8 ">
                        <img src={shedule} alt="" />
                        <h1>{preparing_time}</h1>
                        <img src={barn} alt="" />
                        <h1>{calories}</h1>
                    </div>
                    <div onClick={handleCookFoodClick} className="card-actions justify-first mt-5">
                        <button className="btn rounded-full px-8 py-2 bg-green-500  text-mb font-bold "> Want to Cook</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>     
    );
};
CookFood.propTypes = {
    foods: PropTypes.object.isRequired,
    handelAddfood: PropTypes.func.isRequired
};

export default CookFood;
