

const TeamCard = ({ img, name, desig }) => {
    return (
        <>
            <div className='bg-white hover:shadow-xl hover:scale-95 transition duration-500 rounded-xl'>
                <div className=''>

                    <img
                        className="w-full h-[450px] sm:h-[450px] md:h-[350px] lg:h-[290px] xl:h-[300px] rounded-t-xl"
                        src={img}
                        alt="Image"
                    />
                </div>
                <div className='bg-[#6278FF] rounded-b-xl text-center text-white py-10'>
                    <h4 className="text-xl font-bold">{name}</h4>
                    <p className="text-gray-300">{desig}</p>
                </div>
            </div>

        </>
    );
};

export default TeamCard;