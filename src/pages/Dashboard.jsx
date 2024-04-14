import BookCard from "../components/Card/Card";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import BookSlider from "../components/Slider/BookSlider";
import FactsSlider from "../components/Slider/FactsSlider";
import Stories from "../components/Stories/Stories";

const Dashboard = () => {
    return (
        <>
            <NavbarTop />
            <Stories />
            <Divider />
            <BookSlider />
            <Divider />
            <FactsSlider />
            <NavbarBottom />
        </>
    )
}

export default Dashboard;