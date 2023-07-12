import { Typography } from "@material-tailwind/react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const LINKS = [
    {
        title: "About Us",
        items: ["Our Company", "Career", "Investor Relations", "Social Impact"],
    },
    {
        title: "Resources",
        items: ["Contact", "Give Feedback", "Hello@example.com"],
    }
];
const Footer = () => {

    return (
        <>
            <footer className="relative w-full py-20 bg-[#132742]">
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-14">

                        <div className="text-gray-100">
                            <Typography className="mb-6">
                                <img className="w-[180px]" src="https://i.ibb.co/8j0w3px/logo.png" alt="Logo" />
                            </Typography>
                            <p className="mb-4 flex items-center md:justify-start md:w-4/5 w-full">
                                Lorem ipsum dolor sit amet, consectetur adip
                                iscing elit, sed do.
                            </p>

                            <img className="w-32" src="https://s3-alpha-sig.figma.com/img/afc3/39ec/b2dbc97609b22e416daf9cf8a52d3a2c?Expires=1690156800&Signature=HQToUS~iNurMtwjg0aVp7BspRLOvx-cq3KEblD2PA1nmOTiDr1cJ4Z2-HXw0002frGpQYER0H23~XN11zvQNTpbk3Ei8UkgE0hvJfp6z1-errV~RN64K0ZH0abGU~AESdTh4SwSrHrpe~UFCNJsnvqlMYhmjHou776-PE5CgumqC9UwNJ6hwKJQWtL3S6f88az9VE4uPNiUrCnxz3nemZjaWp8fNt88AfIxkydUrRjgEXEASLwB5QtwDSm7BEfGT~uCbRgXKOOXRwSCJKKuY2bBUfvSo-nhz7taLeVv8rQPfE~K~aNKici3ZPJjZSaVTcIxCBjNbpDKVtbkUSoGzzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            <img className="w-36 -ml-2" src="https://s3-alpha-sig.figma.com/img/a7a4/b5ec/685a56c5db4b456630492d63b5be128a?Expires=1690156800&Signature=MMeIdTwIp04IqgGOAsJbVCJCqq4ldYQAoQPyvWsRb8DvJtdrCxNevz6W80F4700xRF~JpPUsLTjHG7amsNzJRve9~kIs8MEeB0ojBR~s4SmZ4Djs3GIepzBCMK5pzs4f2rNQvihsvYqqCA-QMXEM-ZfonPfLf4wKozPNviqc5IpfSop7D0dU~-kCiVzCeu8JZfvx517-eFBbrb~I8SulAAjgFJyRKKfGcyTqvMqVEOWK6E6z8MXCw3q9uvwuPFsyeUFFRVLq-7jfrQiJpZHJVyECX~tMuEByWfOur-q1LTzpmPCnXyPP4syUESorsMGK7~K8CdeB1cJsjZZSp9Sg5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

                            <h4 className="text-xl my-5">Follow Us</h4>

                            <div className="flex gap-4">
                                <div className="p-2 bg-[#6278FF] rounded-full hover:bg-[#F8781F] transition duration-1000 cursor-pointer">
                                    <FaLinkedinIn className=" text-white text-lg"></FaLinkedinIn>
                                </div>
                                <div className="p-2 bg-[#6278FF] rounded-full hover:bg-[#F8781F] transition duration-1000 cursor-pointer">
                                    <FaTwitter className=" text-white text-lg"></FaTwitter>
                                </div>
                                <div className="p-2 bg-[#6278FF] rounded-full hover:bg-[#F8781F] transition duration-1000 cursor-pointer">
                                    <FaFacebookF className=" text-white text-lg"></FaFacebookF>
                                </div>


                            </div>

                        </div>

                        <div className="grid grid-cols-2 justify-between gap-4 text-gray-100">

                            {LINKS.map(({ title, items }) => (
                                <ul key={title}>
                                    <Typography
                                        color="white"
                                        className="mb-3 text-2xl"
                                    >
                                        {title}
                                    </Typography>
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Typography
                                                as="Link"
                                                href="#"
                                                className="py-1.5 font-normal text-sm transition-colors hover:text-gray-200"
                                            >
                                                {link}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            ))}

                        </div>

                        <div className="text-gray-100">

                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    className="border-2 rounded-full py-[6px] px-2 w-full text-gray-700"
                                    placeholder="Email address" />
                                <button
                                    type="button"
                                    className="text-white btn bg-[#6278FF] rounded-full px-4 py-2 absolute z-10 right-0 top-0">
                                    Started
                                </button>
                            </div>

                            <div className="text-sm">
                                <p className="py-1">Email US</p>
                                <p className="py-1">RK@Oama.io</p>
                                <p className="py-1">Bolomu All Rights Reserved, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;