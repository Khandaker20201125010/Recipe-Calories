import React from 'react';
import PropTypes from 'prop-types';
import Cooktime from '../Cooktime/Preparing';

const CookCount = ({foods}) => {
    return (
        <div className="">
            <h1 className="font-bold text-center text-xl mt-10">Want to cook: <span>{foods.length}</span></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((preparing, index) => (
                        <Cooktime key={preparing.recipe_id} preparing={preparing} index={index}  />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

CookCount.propTypes = {
    foods: PropTypes.array.isRequired
};

export default CookCount;
