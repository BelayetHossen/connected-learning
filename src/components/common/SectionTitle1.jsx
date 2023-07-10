

const SectionTitle1 = ({ sub, title }) => {
    return (
        <>
            <span className="text-blue-500 font-bold">{sub}</span>
            <h3 className="text-2xl font-bold text-gray-800 w-60 mb-8">{title}</h3>
        </>
    );
};

export default SectionTitle1;