
import AboutUs from "../layouts/AboutUs";
import Categories from "../layouts/Categories";
import CourseList from "../layouts/CourseList";
import Hero from "../layouts/Hero";
import PopulerTeacher from "../layouts/PopulerTeacher";
import Testimonials from "../layouts/Testimonials";


const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <CourseList />
            <Categories />
            <PopulerTeacher />
            <Testimonials />
        </>
    );
};

export default Home;