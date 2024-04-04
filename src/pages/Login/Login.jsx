
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='pt-8 w-full bg-[#F3F3F3] h-screen'>
            <div className="max-w-[1140px] mx-auto flex flex-col h-full">
                <Navbar></Navbar>
                <div className="grid h-full content-center ">
                    <div className="w-[600px] py-8  px-16 flex flex-col items-center mx-auto rounded-[5px] bg-white ">
                        <h3 className='text-3xl mb-8 font-semibold'>Login your account</h3>
                        <hr className='w-full h-[1px] bg-[#E7E7E7] mb-8' />
                        <form action="" className='w-full'>
                            <div className="w-full">
                                <label className='text-xl font-semibold' htmlFor="">Email address</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-14 bg-[#F3F3F3] rounded-[5px] p-5' type="email" required name="email" placeholder='Enter your email address' id="" />
                            </div>
                            <div className="w-full my-6">
                                <label className='text-xl font-semibold' htmlFor="">Password</label>
                                <input className='w-full mt-3 text-[#9F9F9F] h-14 bg-[#F3F3F3] rounded-[5px] p-5' type="text" name="password" placeholder='Enter your password' id="" />
                            </div>
                            <input className='w-full h-14 rounded-[5px] bg-[#403F3F] text-xl font-semibold text-white mb-6' type="submit" value="Login" />
                        </form>
                        <h3 className='text-[#706F6F] font-semibold'>Dont’t Have An Account ? <Link className='text-orange-500'>Register</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;