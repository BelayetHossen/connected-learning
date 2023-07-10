import PageHeader from "../common/PageHeader";
import Mission from "../layouts/Mission";
import Teams from "../layouts/Teams";
import WhyUs from "../layouts/WhyUs";


const About = () => {
    return (
        <>
            <PageHeader banner="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="About"></PageHeader>
            <WhyUs />
            <Mission />
            <Teams />
        </>
    );
};

export default About;