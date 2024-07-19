import BookCard from "../components/Card/Card";
import Divider from "../components/Divider/Divider";
import Landscape from "../components/Landscape/Landscape";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import BookSlider from "../components/Slider/BookSlider";
import FactsSlider from "../components/Slider/FactsSlider";
import Stories from "../components/Stories/Stories";

const Dashboard = () => {
    return (
        <>
            <NavbarTop />
            {/* <Stories />
            <Divider />
            <BookSlider />
            <Divider />
            <FactsSlider /> */}
            <Landscape />
            <NavbarBottom />
        </>
    )
}

export default Dashboard;