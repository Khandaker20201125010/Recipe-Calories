import PropTypes from 'prop-types';
const Preparing = ({ preparing, index,handelRemove }) => {
    const { recipe_name, preparing_time, calories } = preparing;
    return (       
                    <tr>
                        <th>{index + 1}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                        <td><button onClick={handelRemove} className="btn rounded-full  bg-green-500 font-bold ">Preparing</button></td>
                    </tr>        
        
        
        
    );
};
Preparing.protoType = {
    preparing: PropTypes.object
}

export default Preparing;