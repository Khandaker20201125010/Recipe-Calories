const Banner = () => {
    return (
        <div className="banner rounded-3xl w-full mt-10">
            <div className=" text-white w-full text-center p-32 ">
                <h1 className="text-4xl text-center m-auto w-[550px] ">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mt-10 w-2/3 m-auto font-bold">Learn and Master in cooking. Nothing make you happy more than making food with you own hand and delicious every moment of life. </p>
                <div className=" flex justify-center gap-10 mt-10">
                    <button className="btn rounded-full px-8 py-2 bg-green-500  text-xl font-bold ">Explore Now</button>
                    <button className="btn rounded-full px-8 py-2 btn-outline text-white text-xl font-bold">Our Feedback</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;