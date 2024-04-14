import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import ThreadForm from "../components/Threads/ThreadForm/ThreadForm";


const ThreadsNew = () => {
    return (
        <>
            <NavbarTop />
            <Divider />
            <ThreadForm />
            <NavbarBottom />
        </>
    )
}

export default ThreadsNew;