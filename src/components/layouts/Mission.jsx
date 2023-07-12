import { Button } from "@material-tailwind/react";


const Mission = () => {
    return (
        <>
            <div className="container mx-auto md:px-14 px-4 py-14">
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="md:w-1/2">
                        <div>
                            <span className="text-[#6278FF] font-bold">Our Mission</span>
                            <h3 className="text-2xl font-extrabold text-gray-800 w-72 mb-8">Build Better For Best Economy</h3>
                        </div>
                        <div className="">
                            <p className="text-justify text-gray-600 py-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                                chard McClintock, a Lati.Contrary to popular belief, Lorem Ipsum is not simply
                                piece of classical Latin
                            </p>
                            <p className="text-justify text-gray-600 py-2">literature from 45 BC, making it over 2000 years old. Ri
                                chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
                                ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips
                                um passage, and going through the cites of the word in classical literature, di
                                scovered the undoubtable source</p>
                        </div>
                        <Button className="rounded-full bg-[#6278FF] capitalize mt-10" variant="filled">Join Our Team</Button>
                    </div>
                    <div className="relative">
                        <img className="w-full md:w-[470px] w-2/3 rounded-xl" src="https://i.ibb.co/1dRFtTS/mission.jpg" alt="Image" />
                        <div className="py-4 px-10 bg-white rounded-lg absolute bottom-10 md:bottom-[21rem] lg:bottom-56 lg:-left-10 xl:-left-20">
                            <h3 className="font-bold text-xl">MST: Alonker lon</h3>
                            <p className="text-[#6278FF]">CEO,Education LTD</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Mission;