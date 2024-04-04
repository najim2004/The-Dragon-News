import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="h-20 flex mb-5 gap-5 items-center bg-[#F3F3F3] min-w-full px-4">
            <button className="text-xl text-white font-medium btn !rounded-none bg-[#D72050] !p-0  !px-6 !py-2">Latest</button>
            <Marquee className="text-lg font-semibold text-[#403F3F] mr-6" speed={70} pauseOnHover><Link to={'/'}>Match Highlights: Germany vs Spain — as it happened!...</Link></Marquee>
        </div>
    );
};

export default BreakingNews;