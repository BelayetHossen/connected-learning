import { Button, Rating } from "@material-tailwind/react";


const CourseCard = ({ img, title, category }) => {
    return (
        <>

            <div className='bg-white p-5 rounded-xl hover:shadow-xl hover:scale-95 transition duration-500'>
                <div className='relative'>
                    <img
                        className="w-full rounded-lg h-56"
                        src={img}
                        alt="Image"
                    />
                    <span className="absolute top-2 right-2 z-10 px-2 py-1 bg-[#ffffffcc] rounded-xl text-[#6278FF]">{category}</span>

                </div>
                <div className='mt-2'>

                    <div className="flex justify-between items-center my-2">
                        <h6 className="text-lg font-bold">{title}</h6>
                        <Rating value={5} readonly />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <p className="text-[#6278FF]">$254.36</p>
                        <Button className="rounded-full bg-[#6278FF] mr-3 capitalize" variant="filled">Book Now</Button>

                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#E3E7FF] p-3 rounded-full">
                            <img className="w-6" src="https://s3-alpha-sig.figma.com/img/728e/f3df/2e6a96bd00686082b73274e9acfdf747?Expires=1690156800&Signature=WRztZ3iWY-3KTtFJGPTFDxMBNBtP0uBjm~AGcIDdC8D5jdii5dFYCYOFG~yXCKn44-1H8Ba9LrY7BMpJeljTi9o51-PMXybUKUgZ1UpSS9q8kYn-ZNgjR2bchPxmNKToYAcd0svXaE2sA2AHnub~KRkxBu2iBmCimtdgwS9ncEMKC5qODW6mF~3rr3OPckVIaWlyamjYM9d6FfksZACgadkOoJ-NF~eqxWuSKHK1MFppNq-GFGX8JvkKR8ojeyYWiE1VaVP6Gp6LP5uuM1n14yThLFvAQ~HC~uP8OPNN-HrtQ~jagscqm~4bdYtKRuwwQ2L0zeZkEq828ZMnUsMN5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image" />
                        </div>

                        <p className="text-[#6278FF]">Best Seller</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CourseCard;