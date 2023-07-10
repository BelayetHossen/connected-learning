

const SectionTitle3 = ({ sub, title }) => {
    return (
        <>
            <div className="text-center">
                <span className="text-[#6278FF] font-bold">{sub}</span>
                <h3 className="text-2xl font-extrabold text-gray-800 w-72 mb-8 mx-auto">{title}</h3>
            </div>
        </>
    );
};

export default SectionTitle3;