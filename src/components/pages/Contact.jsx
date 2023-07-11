import { Button } from "@material-tailwind/react";
import PageHeader from "../common/PageHeader";
import SectionTitle2 from "../common/SectionTitle2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <>
            <Helmet><title>Contact Us | Connected Learning </title></Helmet>
            <PageHeader banner="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Contact"></PageHeader>
            <div className="bg-[#EDEEF3]">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <div className="py-10">
                        <SectionTitle2 sub="Contact Us" title="Our Company Contact Now"></SectionTitle2>
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap:10 mt-14">
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-bold">Get In Touch With Us</h3>
                                <p className="text-gray-600 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>

                                <div className="flex gap-4 items-center py-5">
                                    <img className="w-20 h-20 p-6 bg-[#ECDBE3] rounded-full" src="https://s3-alpha-sig.figma.com/img/db67/e518/7b552b6a4bed177eb2b7f4c348159e2e?Expires=1690156800&Signature=oVtDBOl9VFR7rMWA~wc2qaCfYt2WShictVXgbI3qyvtglID6VbuwSHntgQZseCtEHZ0EwqlbKMA0fQBlBw2A20UDzXdASdpVWjklATHvkpbfOCI~g9LUFG~~lVRhz1g3dWk8yXyOdzLcZISSU8B8nmOZA40kf1pTYkyYdsuVnXRyhT6dfaYWZAn3TAOc8MZmiLlBPMcdPCfiAbOVqYYX6k4XLdI0jqnRGRXSO6SwQjzOw96xvblajzJE-YsvjrBgWh8ba-cXvU6woaD0CHcqKR5fAaOKSpzmEOgJwUXkdoQ-qNcGHfhSeoFL5poiahRKQbqu75hcqOOOa~Qd7F-rtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image" />
                                    <div>
                                        <h5 className="text-xl font-bold mb-2">Our Address</h5>
                                        <p className="text-gray-700">2972 Westheimer Rd. Santa Ana, Illinois 8585</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center py-5">
                                    <img className="w-20 h-20 p-6 bg-[#BCDECA] rounded-full" src="https://s3-alpha-sig.figma.com/img/07a4/a104/c4005bc064f6d1012379963734618bc9?Expires=1690156800&Signature=ScyIYnDX48YkSqsb0qlsAYpVlonMxdpo2X77Dn3zbC81QhJigV3p~OvKik6dvtiwheu6awsTMzSVtqggvEfwQEwS5znikg7fbIgqdvn1FSujRJFP5GV7ny8bOigMrSEcpYITwYaXA9Eg4XwjzXE4AusIGWnjJdbvfFuUGH7Hd50j-szBkZhTAnRW4jF9FHeI6ncr0iVMpr2pJoPvuXtCaSk2KMaoBN0loT9AOVCYGceAuDjQzl-PssLQMnnDaBX-iyjG3DBbi3TNI6SmkV3ByndUrpWt~A1gDnNcEf-ow6ITc4cqpxM97n5sLKq9pNeN8OZp~jD0dCXn5Q6J3uhF~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image" />
                                    <div>
                                        <h5 className="text-xl font-bold mb-2">Contact Information</h5>
                                        <p className="text-gray-700">Mobile: +8825465456</p>
                                        <p className="text-gray-700">Email: example@gmail.com</p>

                                    </div>
                                </div>
                                <div className="flex gap-4 items-center py-5">
                                    <img className="w-20 h-20 p-6 bg-[#EDB8C3] rounded-full" src="https://s3-alpha-sig.figma.com/img/3626/8db8/fcc9b8b60fa38fa051c1dd25710bda3a?Expires=1690156800&Signature=D3BjcA12mOXX6jvaWEggNG8i~PsBCl-3R7avLlmnqyJaufN2ICQ9qlDOXvnxzEpARITa5lAzSA~9kbaAe77WGbIGdK0Bcz38aw4l6Yokl3a~ap8KPgb9kqZ6OsnKSkV-JQOhm7Tp~2IdncP27szoXB~CMnzYyDNkv8EPqOSMoVWnGE0LznyJcDtvnHbfnL12-wuV7Im5iuJKDrUF20cobaaBTY1UOXCYQOtJs1qu56I80FJxqdujCFAAkzcQzw8s38iNNIiQCR8SJ0qSzm1wUH~n63UdeGQA308uOVDiVzVS3bi4WLKt79FghgVF9gM4CUA3QrCFOFtuwREHpY5aOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image" />
                                    <div>
                                        <h5 className="text-xl font-bold mb-2">Contact Information</h5>
                                        <p className="text-gray-700">Mobile: +8825465456</p>
                                        <p className="text-gray-700">Email: example@gmail.com</p>

                                    </div>
                                </div>

                            </div>
                            <div className="md:w-1/2">
                                <img src="https://i.ibb.co/kB9DyNW/contact.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="py-14">
                        <SectionTitle2 sub="Contact Us" title="Have Any Questions? Let’s Talk!"></SectionTitle2>

                        <div className="bg-white p-4 rounded-md">
                            <form>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div className="sm:col-span-3">
                                        <label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-900">
                                            Your Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Type your name here"
                                                type="text"
                                                id="name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6 bg-gray-200 px-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                                            Email Address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Type your email here"
                                                type="email"
                                                id="email"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6 bg-gray-200 px-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="subject" className="block text-sm font-bold leading-6 text-gray-900">
                                            Subject
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Type your subject here"
                                                type="text"
                                                id="subject"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6 bg-gray-200 px-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="phone" className="block text-sm font-bold leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Type your phone number here"
                                                type="text"
                                                id="phone"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6 bg-gray-200 px-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="massage" className="block text-sm font-bold leading-6 text-gray-900">
                                            Massege...
                                        </label>
                                        <div className="mt-2 mb-3">
                                            <textarea
                                                placeholder="Type your massage here ..........."
                                                id="massage"
                                                rows={3}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6 bg-gray-200 px-2"
                                                defaultValue={''}
                                            />
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="terms"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="terms" className="font-bold text-gray-900">
                                                    Accept <Link className="text-red-600">terms</Link> and <Link className="text-red-600">privacy policy</Link>.
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <Button className="rounded-full bg-[#6278FF] mr-3 capitalize" variant="filled">Submit Massage</Button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Contact;