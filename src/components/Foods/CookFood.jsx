import shedule from "../../assets/images/schedule.png";
import barn from "../../assets/images/burn.png"
import PropTypes from 'prop-types';
const CookFood = ({foods,handelAddfood }) => {
    const { recipe_name, recipe_image, short_description, ingredients,preparing_time,calories } = foods;
    return (
        <div class='mt-20 bg-slate-200 rounded-2xl'>
            <div class="card w-96  shadow-2xl ">
                <figure><img src={recipe_image} alt="Shoes" className='rounded-3xl w-[350px] h-[220px] mt-10' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <h2 className=' font-bold mt-8'>Ingredients:{ingredients.length}</h2>
                    <div className='mt-2'>
                        <ul class='marker:text-gray-500 list-disc pl-5 space-y-3 text-slate-400'>
                            {ingredients.map((ingredient, recipe_id) => (
                                <li key={recipe_id}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-2 mt-8 ">
                        <img src={shedule} alt="" />
                        <h1>{preparing_time}</h1>
                        <img src={barn} alt="" />
                        <h1>{calories}</h1>
                    </div>
                    <div onClick={() =>handelAddfood(foods)} class="card-actions justify-first mt-5">
                        <button className="btn rounded-full px-8 py-2 bg-green-500  text-mb font-bold "> Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CookFood.PropTypes = {
    foods: PropTypes.object.isRequired,
    handelAddfood :PropTypes.func

}
export default CookFood;