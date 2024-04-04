
import { useEffect } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNave/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const navigator = useNavigate(null);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname == '/') {
            navigator('/category/0');
        }
    }, [])
    return (
        <div className="max-w-[1140px] mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid lg:mt-20 mb-6 mt-6 grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-semibold mb-5">Dragon News Home</h3>
                    <Outlet></Outlet>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;