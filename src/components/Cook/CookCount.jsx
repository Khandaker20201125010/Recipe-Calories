const CookCount = ({foods}) => {
    return (
        <div className="">
            <h1 className="ml-44 font-bold">Want to cook:<span>{foods.length}</span></h1>
            <div className="table  ml-10 flex justify-between">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Caloris</th>
                </tr>

            </div>
        </div>



    );
};

export default CookCount;