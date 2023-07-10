import { Rating } from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
    return (
        <>
            <div className="">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-2/5">
                            <div>
                                <span className="text-[#6278FF] font-bold">Testimonial</span>
                                <h3 className="text-2xl font-extrabold text-gray-800 w-60 mb-8">What They Say?</h3>
                            </div>
                            <div className="w-5/6">
                                <p className="text-justify text-gray-600 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                    smod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
                                </p>
                                <p className="text-justify text-gray-600 py-2">enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <button className='relative rounded-full capitalize border border-[#6278FF] text-[#6278FF] py-1 pl-4 pr-32 mt-6'>Write your Assessment <BsArrowRight className="absolute top-0 right-0  rounded-xl py-1 px-2 text-[#6278FF] text-[32px] border border-[#6278FF]" /></button>
                        </div>
                        <div className="relative lg:w-3/5">

                            <img className="w-1/2 rounded-lg" src="https://i.ibb.co/1XzTzQ0/testi-banner.jpg" alt="Image" />
                            <BsArrowRight className="absolute top-6 md:top-24 left-1/2 md:left-1/2 rounded-full p-1 bg-[#d3d3d3d0] hover:bg-white text-[#6278FF] text-3xl -ml-3" />

                            <div className="bg-[#EDEEF3] border-l-8 p-5 border-[#6278FF] rounded-xl w-56 md:w-3/5 absolute right-2 -bottom-8">

                                <p className="hidden lg:block ">Lorem ipsum dolor sit amet, consectetur adip
                                    iscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commo
                                    do consequat. Duis aute irure dolor</p>
                                <div className="flex justify-between items-center my-2">
                                    <h6 className="text-lg font-bold">Ruksana Akter</h6>
                                    <Rating value={5} readonly />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;