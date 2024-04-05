import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [pSC, setPSC] = useState(false);
    const handlePSH = () => {
        setPSC(!pSC);
    };
    const { userRegister } = useContext(AuthContext);

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        userRegister(email, password)
            .then(userCredentials => {
                updateProfile(userCredentials.user, {
                    displayName: name,
                    photoURL: photo,
                })
                .then(()=>{
                    console.log('profile updated successfully')
                    
                })
                .catch(error => {
                    console.log('profile update related issus',error)
                 })
                
                 console.log(userCredentials.user);
            })
            .catch(error => {
                console.log('Registration failed', error)
            })
    };
    return (
        <div className='pt-8 w-full bg-[#F3F3F3] min-h-full'>
            <div className="flex flex-col">
                <div className="max-w-[1140px] w-full mx-auto">
                    <Navbar></Navbar>
                </div>

                <div className="grid w-full content-center h-[calc(100vh-80px)] mb-9 mt-9">
                    <div className="w-[500px] py-5  px-10 flex flex-col items-center mx-auto rounded-[5px] bg-white ">
                        <h3 className='text-2xl mb-6 font-semibold'>Register your account</h3>
                        <hr className='w-full h-[1px] bg-[#E7E7E7] mb-5' />

                        {/* ---------------------form start here--------------------- */}
                        <form onSubmit={handelRegister} action="" className='w-full'>
                            <div className="w-full mb-5">
                                <label className='text-lg font-semibold' htmlFor="">Your Name</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-11 bg-[#F3F3F3] rounded-[5px] p-5' type="text" required name="name" placeholder='Enter your name' />
                            </div>
                            <div className="w-full mb-5">
                                <label className='text-lg font-semibold' htmlFor="">Photo URL</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-11 bg-[#F3F3F3] rounded-[5px] p-5' type="text" name="photo" placeholder='Enter your Photo url' />
                            </div>
                            <div className="w-full">
                                <label className='text-lg font-semibold' htmlFor="">Email address</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-11 bg-[#F3F3F3] rounded-[5px] p-5' type="email" required name="email" placeholder='Enter your email address' />
                            </div>
                            <div className="relative w-full my-4">
                                <label className='text-lg font-semibold' htmlFor="">Password</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-11 bg-[#F3F3F3] rounded-[5px] p-5' type={pSC ? 'text' : "password"} name="password" placeholder='Enter your password' />
                                <span onClick={handlePSH} className="absolute right-3 top-[50%] size-[40px] flex items-center justify-center text-[22px]">{pSC ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                            <div className="mb-5 flex items-center gap-2 text-[#706F6F]">
                                <input required className="size-4" type="checkbox" name="terms" />
                                <label className="font-semibold" htmlFor="">Accept Term & Conditions</label>
                            </div>
                            <input className='w-full h-11 btn btn-sm rounded-[5px] bg-[#403F3F] text-lg font-semibold text-white mb-5' type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;