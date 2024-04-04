import { FaGoogle } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { LiaInstagram } from "react-icons/lia";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-5">Login With</h2>
                <div className="w-full btn btn-sm h-[35px] rounded-lg border-[1px] border-blue-500">
                    <h2 className="flex gap-1 justify-center items-center text-blue-500"><FaGoogle /> Login With Google</h2>
                </div>
                <div className="w-full btn btn-sm h-[35px] mt-3 rounded-lg border-[1px] border-black">
                    <h2 className="flex gap-1 justify-center items-center "><BiLogoGithub /> Login With Github</h2>
                </div>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
                <div className="border-[2px] py-4 border-[#E7E7E7] w-full rounded-[5px]">
                    <a href="#" target="_blank"><div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-blue-700 rounded-[50%] justify-center items-center flex text-2xl bg-[#F3F3F3]"><TiSocialFacebook /></span> Facebook</div></a>
                    <hr className="bg-[#E7E7E7] h-[1px] my-4" />
                    <a href="#" target="_blank"><div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-blue-500 rounded-[50%] justify-center items-center flex !text-normal bg-[#F3F3F3]"><ImTwitter /></span> Twitter</div></a>
                    <hr className="bg-[#E7E7E7] h-[1px] my-4" />
                    <a href="#" target="_blank"><div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-orange-500 rounded-[50%] justify-center items-center flex text-2xl bg-[#F3F3F3]"><LiaInstagram /></span> Instagram</div></a>
                </div>
            </div>
            <div className="bg-[#F3F3F3] p-4">
                <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
                <img className="w-full" src={qZone1} alt="" />
                <img className="my-5 w-full" src={qZone2} alt="" />
                <img className="w-full" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;