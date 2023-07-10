import SectionTitle1 from "../common/SectionTitle1";
import { TbCalendarCode } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { MdDisplaySettings } from "react-icons/md";
import { SiInteractiondesignfoundation, SiTaichigraphics } from "react-icons/si";
import { AiFillAlipayCircle } from "react-icons/ai";
import { LuSwitchCamera } from "react-icons/lu";
import { LiaAlipay } from "react-icons/lia";

const Categories = () => {
    return (
        <>
            <div className="">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <SectionTitle1 sub="Service" title="Top Categories"></SectionTitle1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <TbCalendarCode className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">Development</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <FaRegHandshake className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">Business</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <MdDisplaySettings className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">IT and Software</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <SiInteractiondesignfoundation className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">UI Design</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <AiFillAlipayCircle className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">UX Design</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <LiaAlipay className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">Marketing</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <LuSwitchCamera className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">Photography</h4>
                        </div>
                        <div className="p-6 bg-[#EDEEF3] rounded text-center hover:shadow-xl hover:scale-95 transition duration-500">
                            <SiTaichigraphics className="mx-auto text-7xl text-[#6278FF]" />
                            <h4 className="font-bold text-xl my-4">Graphics Design</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;