import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import lArrow from "../.../../../assets/leftarrow.svg"
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
const NewsDetails = () => {
    const allNews = useLoaderData();
    const { id } = useParams();
    const [findNews, setFindNews] = useState({});

    useEffect(() => {
        setFindNews(allNews?.find(news => news._id === id))
    }, [allNews, id])

    const { title, image_url, details } = findNews;

    return (
        <div className="max-w-[1140px] mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-8 gap-6">
                <div className="col-span-3">
                    <h3 className="text-xl font-semibold mb-5">Dragon News</h3>
                    <div className="border-[1px] border-[#E7E7E7] rounded-[5px] p-[30px]">
                        <img className="h-[411px] w-full" src={image_url} alt="" />
                        <h3 className="text-2xl mt-5 mb-2 max-w-[664px] font-bold leading-[45px]">{title}</h3>
                        <p className="text-[#706F6F] leading-[26px]">{details}</p>
                        <Link to={-1}><button className="btn btn-sm bg-[#D72050] mt-8 text-white !rounded-none h-12 text-xl font-medium"><img className="size-6" src={lArrow} alt="" />All news in this category</button></Link>
                    </div>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;