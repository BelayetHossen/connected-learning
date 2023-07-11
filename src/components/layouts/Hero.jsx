import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiPlay } from "react-icons/bi";

const Hero = () => {
    const [counter, setCounter] = useState(0);
    const targetValue = 100585;
    const totalTimeInSeconds = 5;
    const incrementPerFrame = (targetValue / totalTimeInSeconds) * 2 / 60; // Assuming 60 FPS

    useEffect(() => {
        let animationFrame;
        let currentCounter = 0;

        const animateCounter = () => {
            currentCounter += incrementPerFrame;

            if (currentCounter >= targetValue) {
                setCounter(targetValue);
                cancelAnimationFrame(animationFrame);
            } else {
                setCounter(currentCounter);
                animationFrame = requestAnimationFrame(animateCounter);
            }
        };

        animationFrame = requestAnimationFrame(animateCounter);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [targetValue, incrementPerFrame]);



    return (
        <>
            <section className="relative">
                <div className="pt-32 pb-14 bg-[#EDEEF3] min-h-full min-w-full">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-24">

                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start -mt-20 -pt-20">

                                <h2 className="text-5xl md:text-4xl leading-relaxed md:leading-snug mb-2 uppercase font-extrabold">For Every Student Every Classroom. Real Results.</h2>

                                <p className="text-sm md:text-base mb-4">

                                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.

                                </p>

                                <div className="flex items-center">
                                    <Button className="rounded-full bg-[#6278FF] mr-3 py-3" variant="filled">Get Started</Button>
                                    <div className="flex items-center p-2 rounded-xl hover:bg-[#F8781F] transition duration-1000">
                                        <img className="w-7" src="https://i.ibb.co/MN2MT55/Ellipse-1.png" alt="Icon" />
                                        <BiPlay className="rounded-full text-5xl text-[#6278FF] bg-white mr-3 -ml-6"></BiPlay>
                                        <span className="font-bold">Watch Video</span>
                                    </div>
                                </div>
                                <img
                                    className="w-96 rounded-lg absolute bottom-60 left-0 moving-try hidden lg:block"
                                    src="https://i.ibb.co/rQGTGjf/Vector-1.png"
                                    alt="Image"
                                />
                            </div>

                            <div className="relative md:w-1/2 w-full flex md:h-[570px] flex-wrap content-center">


                                <img
                                    className="w-[450px] z-40 pb-20"
                                    src="https://i.ibb.co/2PCGynJ/hero-img.png"
                                    alt="Image"
                                />

                                <img
                                    className="absolute top-10 left-10 w-8 h-8 moving-try"
                                    src="https://i.ibb.co/25g38nk/trtangle.png"
                                    alt="Image"
                                />
                                <img
                                    className="w-10 absolute top-16 right-36 moving-extra"
                                    src="https://i.ibb.co/YfYVB70/mouse.png"
                                    alt="Image"
                                />
                                <img
                                    className="w-32 absolute top-6 right-36 moving-victor"
                                    src="https://i.ibb.co/0KqGJ92/Vector-3.png"
                                    alt="Image"
                                />
                                <img
                                    className="w-32 absolute bottom-6 right-28 moving-mouse"
                                    src="https://i.ibb.co/H4rCvyc/Vector-2.png"
                                    alt="Image"
                                />
                                <img
                                    className="w-32 absolute bottom-44 -left-16 moving-victor"
                                    src="https://i.ibb.co/923MBFb/Vector-4.png"
                                    alt="Image"
                                />
                                <img
                                    className="w-10 absolute bottom-32 left-10 moving-mouse"
                                    src="https://i.ibb.co/YfYVB70/mouse.png"
                                    alt="Image"
                                />

                                <div className="w-48 p-3 bg-white rounded-lg absolute bottom-24 right-20 z-50">
                                    <div className="flex justify-start gap-4 items-center mb-3">
                                        <div className="bg-gray-300 p-2 rounded-full">
                                            <img className="w-5 h-5" src="https://s3-alpha-sig.figma.com/img/a785/3047/d9547a94eee0ef2cf4bc4c9501250a4e?Expires=1690156800&Signature=f~RIrR4tcvtt4T-BU6mlbh2ptiZQujzmCXWx~SkHeseH~fxjnayxembbkYRLFPVeGgtu1OKjVf8YjCUBqdiEjDf~59TALYacKElGfjfLC1zmF4V5zrtE3BQOX3ff0wNfmdTrutWH8l5CdbXm6WfN3iaujLmibWPE~cdwNgOuIc~T10-xC1rcbZvcaqb7jBlddwlHOe8c0PEaFSehOdOlbULOq9EzWMPw0kdVtUFCESt7n18t3xbpe1P4KcehgD2u69mfJ6rxdMjOxYhP5R91Or-rstxKoTerwsrJfsT7RUJRQBRtLL8Mpg5DLTvbI2eT8UIw~K-20Lj~4khSVzLWrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Icon" />
                                        </div>
                                        <div>
                                            <span className="text-sm">Counting</span>
                                            <h5 className="text-[18px] font-bold -mt-1">{Math.floor(counter)}+</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-[#6278FF]">
                                        <div>
                                            <p className="text-sm">Graduations</p>
                                        </div>
                                        <div>
                                            <p className="text-sm"> 5.5 Year</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="flex justify-between bg-white p-10 rounded-xl mt-8 flex-col md:flex-row gap-4">
                            <img className="w-[140px] h-[40px]" src="https://i.ibb.co/5TmT998/google.png" alt="Image" />
                            <img className="w-[140px] h-[40px]" src="https://i.ibb.co/HtTH9Hg/microsoft.png" alt="Image" />
                            <img className="w-[140px] h-[40px]" src="https://i.ibb.co/yVr5WT8/lattice.png" alt="Image" />
                            <img className="w-[140px] h-[40px]" src="https://i.ibb.co/jhKY6hm/dribble.png" alt="Image" />
                        </div>
                    </div>

                </div>
            </section >
        </>
    );
};

export default Hero;