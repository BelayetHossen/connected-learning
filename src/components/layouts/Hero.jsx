import { Button } from "@material-tailwind/react";
import { BiPlay } from "react-icons/bi";

const Hero = () => {
    return (
        <>
            <section className="">
                <div className="pt-32 pb-14 bg-[#EDEEF3] h-[900px]">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="flex justify-between gap-24">

                            <div className="flex flex-col w-full md:w-2/3 justify-center items-start lg:mt-14">

                                <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 uppercase font-extrabold">

                                    For Every Student
                                    Every Classroom.
                                    Real Results.

                                </h2>

                                <p className="text-sm md:text-base mb-4">

                                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.

                                </p>

                                <div className="flex">
                                    <Button className="rounded-full bg-blue-500 mr-3" variant="filled">Get Started</Button>
                                    <div className="flex items-center">
                                        <BiPlay className="rounded-full border-4  border-l-blue-500 border-e-none transition-colors duration-300 ease-linear text-5xl text-blue-500 bg-white mr-2"></BiPlay>
                                        <span>Watch Video</span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3 flex flex-wrap content-center hidden lg:block">
                                <img
                                    className="w-96 rounded-lg"
                                    src="../../../public/hero-female.svg"
                                    alt="nature image"
                                />

                            </div>

                        </div>

                        <div className="flex justify-between bg-white p-10 rounded-xl my-8">
                            <img className="w-[140px] h-[40px]" src="../../../public/google.png" alt="" />
                            <img className="w-[140px] h-[40px]" src="../../../public/microsoft.png" alt="" />
                            <img className="w-[140px] h-[40px]" src="../../../public/lattice.png" alt="" />
                            <img className="w-[140px] h-[40px]" src="../../../public/dribble.png" alt="" />
                        </div>


                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;