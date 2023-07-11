import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();
    const pathName = location.pathname;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const bgClass = isScrolled ? 'bg-white' : '';


    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                className={`p-1 font-bold hover:text-[#6278FF]  ${pathName == '/' ? 'text-[#6278FF]' : ''}`}
            >
                <div className="group relative">
                    <Link to="/" className="flex items-center">
                        Home
                    </Link>
                    <div className={`border-t-2 border-[#6278FF] w-6 h-1 bg-[#6278FF] absolute left-0 bottom-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${pathName == '/' ? 'opacity-100' : ''}`}></div>
                </div>
            </Typography>
            <Typography
                as="li"
                className={`p-1 font-bold hover:text-[#6278FF]  ${pathName == '/about' ? 'text-[#6278FF]' : ''}`}
            >
                <div className="group relative">
                    <Link to="/about" className="flex items-center">
                        About
                    </Link>
                    <div className={`border-t-2 border-[#6278FF] w-6 h-1 bg-[#6278FF] absolute left-0 bottom-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${pathName == '/about' ? 'opacity-100' : ''}`}></div>
                </div>
            </Typography>
            <Typography
                as="li"
                className={`p-1 font-bold hover:text-[#6278FF]  ${pathName == '/course' ? 'text-[#6278FF]' : ''}`}
            >
                <div className="group relative">
                    <Link to="/course" className="flex items-center">
                        Course
                    </Link>
                    <div className={`border-t-2 border-[#6278FF] w-6 h-1 bg-[#6278FF] absolute left-0 bottom-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${pathName == '/course' ? 'opacity-100' : ''}`}></div>
                </div>
            </Typography>
            <Typography
                as="li"
                className={`p-1 font-bold hover:text-[#6278FF]  ${pathName == '/contact' ? 'text-[#6278FF]' : ''}`}
            >
                <div className="group relative">
                    <Link to="/contact" className="flex items-center">
                        Contact
                    </Link>
                    <div className={`border-t-2 border-[#6278FF] w-6 h-1 bg-[#6278FF] absolute left-0 bottom-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${pathName == '/contact' ? 'opacity-100' : ''}`}></div>
                </div>
            </Typography>
        </ul>
    );

    return (
        <div className="w-full m-0">
            <div className={`${pathName == '/' ? '' : 'bg-white'} fixed top-0 left-0 right-0 z-[100] ${bgClass}`}>
                <div className="container mx-auto md:px-14 px-4 py-4">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Link
                            to="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <img className="w-32" src="https://i.ibb.co/8j0w3px/logo.png" alt="Logo" />
                        </Link>
                        <div className="hidden lg:block">{navList}</div>
                        <div className="flex pr-2 hidden lg:block">
                            <button className="border border-[#6278FF] text-[#6278FF] rounded-full px-6 py-[7px] mr-3 capitalize text-md font-bold">
                                Login
                            </button>
                            <Button variant="filled" className='bg-[#6278FF] rounded-full capitalize -mt-1'>Sign Up</Button>

                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                    <MobileNav open={openNav}>
                        <div className="container mx-auto bg-[#fdfdfdec] p-4">
                            {navList}
                            <div className="flex items-center pr-2">
                                <button className="border border-[#6278FF] text-[#6278FF] rounded-full px-6 py-[7px] mr-3 capitalize text-md font-bold">
                                    Login
                                </button>
                                <Button variant="filled" className='bg-[#6278FF] rounded-full capitalize -mt-1'>Sign Up</Button>

                            </div>
                        </div>
                    </MobileNav>
                </div>
            </div>
        </div>
    );
}



