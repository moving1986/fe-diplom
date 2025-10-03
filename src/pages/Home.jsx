import LoadLine from "../components/LoadLine";
import MainHeader from "../components/Headers/MainHeader/MainHeader";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/Home/AboutUs";
import HowItWorck from "../components/Home/HowItWorck";
import Reviews from "../components/Home/Reviews";

const Home = () => {

    return (
        <>
            <MainHeader />
            <LoadLine />
            <main>
                <AboutUs />
                <HowItWorck />
                <Reviews />
            </main>
            <Footer />
        </>
    )
}

export default Home;