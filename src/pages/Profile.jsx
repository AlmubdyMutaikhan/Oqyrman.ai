import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import UserProfile from "../components/UserProfile/UserProfile";

const Profile = () => {
    return (
        <>
            <NavbarTop />
            <Divider />
            <UserProfile />
            <NavbarBottom />
        </>
    )
}

export default Profile;