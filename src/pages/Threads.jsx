import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import ThreadCatalog from "../components/Threads/ThreadCatalog/ThreadCatalog";
import ThreadForm from "../components/Threads/ThreadForm/ThreadForm";


const Threads = () => {
    return (
        <>
            <NavbarTop />
            <Divider />
            <ThreadCatalog />
            <NavbarBottom />
        </>
    )
}

export default Threads;