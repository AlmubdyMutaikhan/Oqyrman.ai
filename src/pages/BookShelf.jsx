import Catalog from "../components/Catalog/Catalog";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"

const BookShelf = () => {
    return (
        <>
            <NavbarTop />
            <Divider />
            <Catalog />
            <NavbarBottom />
        </>
    )
}

export default BookShelf;