import { FaGoogle } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { LiaInstagram } from "react-icons/lia";
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
            <div className="py-4">
                <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
                <div className="border-[2px] py-4 border-[#E7E7E7] w-full rounded-[5px]">
                    <div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-blue-700 rounded-[50%] justify-center items-center flex text-2xl bg-[#F3F3F3]"><TiSocialFacebook/></span> Facebook</div>
                    <hr className="bg-[#E7E7E7] h-[1px] my-4" />
                    <div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-blue-500 rounded-[50%] justify-center items-center flex !text-normal bg-[#F3F3F3]"><ImTwitter/></span> Twitter</div>
                    <hr className="bg-[#E7E7E7] h-[1px] my-4" />
                    <div className="text-[#706F6F] flex items-center gap-2 font-medium ml-4"><span className="!size-[30px] text-orange-500 rounded-[50%] justify-center items-center flex text-2xl bg-[#F3F3F3]"><LiaInstagram/></span> Instagram</div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;