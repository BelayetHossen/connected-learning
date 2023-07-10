import { AiOutlineRight } from "react-icons/ai";

const PageHeader = ({ banner, title }) => {
    return (
        <>
            <div className="relative">
                <div className="h-screen flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={banner} alt="Image" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                    <div className="flex items-center text-3xl font-bold text-white z-10">
                        <h2>Home</h2>
                        <AiOutlineRight />
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PageHeader;