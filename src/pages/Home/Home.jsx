import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNave/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="">News coming soon...</h2>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;