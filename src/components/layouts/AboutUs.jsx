

const AboutUs = () => {
    return (
        <>
            <div className="container mx-auto md:px-14 px-4 py-14 md:flex flex-col md:flex-row gap-10 h-[700px]">
                <div className="relative md:w-1/2">

                    <img className="absolute top-8 right-10 w-[500px] rounded-xl z-20" src="https://s3-alpha-sig.figma.com/img/27ed/32db/c45408ff39d286e024f2ec1ded56c841?Expires=1690156800&Signature=JVysK-V23zsimHj5hpyxHPpIUOwWqJZHpEQf~1zxVYy7uBS~bW8dalSqILd7d9uHaXM8JvChMf~tpScT9-z7241V2v~~RKEga-tFhau0YsU8CZMotiPvspv~RVNKGq-NJySGrDuTRVg~CYVfRykPhwb-wtgNPGobnQcC2o2AH-sr2UWizxrx-FDL5EqDmPEGHdEwOQ-jJz3r8o2DO0tPRJ3JKwHKNivFpqu31TjwWbpFPiVXh1-qMySKHImLgy0bW0VELsPNJECY2O~7a3fgrknIOCMj6pRPkbsawAFP0fJ7JbksU6ZdIQFIRXxKEJkKQNQszwfyGTFs4WSnLJcknQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="absolute top-14 left-0 w-[500px] h-[350px] rounded-xl bg-transparent border-2 border-blue-500 hidden md:block" />
                    <img className="absolute top-1 right-1 w-[200px] rounded-xl z-10" src="https://s3-alpha-sig.figma.com/img/3d3d/7c73/6007e04735acdb524f86f44e3afec5c4?Expires=1690156800&Signature=VcznhPcWBdiLHUJC2yjKv0XpwFygMMqAw114PcNumDpLDztCSQ4jBKkRCdUcjbMAWOtarGJDs~Q5trUWnvVEuZqWr478XB~VyAr10QVmrpIYokkTyVEpnVJfRhh2fEHpofiv5mXxB8bVmvsv~yHqmBorjaUh5KPoV~Dop8wfqnobu2jFTfA1eV6O48zYMxp347H5bna8Etns7TWSQ19ELeNAbXYEX42fKmMdxt5MsTV9wMAHNDTNOPbk0HFChJjUakK2pELNz59NSfN~-KzlatCh79QA4IdwkOAflZS~9jOYZ3pyHkVcNvVdumoUZZHEf1DEiqNxhgtDWk6guW~pQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

                </div>
                <div className="md:w-1/2 mt-84">
                    <h4 className="text-blue-500 font-bold text-xl">About Us</h4>
                    <h3 className="text-gray-900 font-bold text-4xl py-3 w-[500px]">We are providing the best
                        online digital courses.</h3>
                    <p className="text-gray-600 text-sm py-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
                        ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips
                        um passage, and going through the cites of the word in classical literature, di
                        scovered the undoubtable source </p>

                    <p className="text-gray-600 text-sm py-2">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonoru
                        et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                        book is a treatise on.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full text-white mt-4">Learn More</button>
                </div>
            </div>
        </>
    );
};

export default AboutUs;