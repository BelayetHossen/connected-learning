import { Helmet } from "react-helmet";
import PageHeader from "../common/PageHeader";
import Mission from "../layouts/Mission";
import Teams from "../layouts/Teams";
import WhyUs from "../layouts/WhyUs";


const About = () => {
    return (
        <>
            <Helmet><title>About Us | Connected Learning </title></Helmet>
            <PageHeader banner="https://i.ibb.co/D8CyGYd/about-banner.png" title="About"></PageHeader>
            <WhyUs />
            <Mission />
            <Teams />
        </>
    );
};

export default About;
