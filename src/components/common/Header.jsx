
import { useState, useEffect } from "react";
import {
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                className="p-1 font-bold hover:text-blue-500"
            >
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-bold hover:text-blue-500"
            >
                <Link to="/about" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-bold hover:text-blue-500"
            >
                <Link to="/course" className="flex items-center">
                    Course
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-bold hover:text-blue-500"
            >
                <Link to="/contact" className="flex items-center">
                    Contact
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="font-Poppins w-full m-0">
            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto md:px-14 px-4 py-4">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Link
                            to="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <img className="w-32" src="../../../public/logo.svg" alt="Logo" />
                        </Link>
                        <div className="hidden lg:block">{navList}</div>
                        <div className="flex items-center pr-2 hidden lg:block">
                            <Button variant="outlined" className='rounded-full mr-3 capitalize'>Login</Button>
                            <Button variant="filled" className=' rounded-full capitalize'>Sign Up</Button>

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
                        <div className="container mx-auto">
                            {navList}
                            <div className="flex items-center pr-2">
                                <Button variant="outlined" className='rounded-full mr-3 capitalize'>Login</Button>
                                <Button variant="filled" className=' rounded-full capitalize'>Sign Up</Button>

                            </div>
                        </div>
                    </MobileNav>
                </div>
            </div>
        </div>
    );
}



