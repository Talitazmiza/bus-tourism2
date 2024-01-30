import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
// import NewsLetter from "../organs/NewsLetter"
// import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"
import NavBar from "../../components/organs/NavBar"
import Footer from "../../components/organs/Footer"
import CompanyInformation from "../organs/CompanyInformation.tsx";

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Testimonials />
            <Services />
            <TopDestination />
            <BookingSteps />
            <CompanyInformation />
            <Footer />
        </>
    )
}

export default Home