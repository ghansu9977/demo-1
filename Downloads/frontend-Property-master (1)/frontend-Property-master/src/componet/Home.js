import Blog from "./Blog";
import CarCarousel from "./Carosal";
import Contact from "./Contact";
import DummyProperty from "./dummyProperty";
import Footer from "./Footer";
import Services from "./Service";
import Header from "./Header";

export default function Home() {
    return <>
        <Header />
        <CarCarousel />
        <DummyProperty />
        <Services />
        <Blog />
        {/* <Contact /> */}
        <Footer />
    </>
}