import { Link, NavLink } from "react-router-dom";
import user from '../../../assets/user.png';
const Navbar = () => {

    const menu =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/'}>About</NavLink></li>
            <li><NavLink to={'/'}>Career</NavLink></li>
        </>
    return (
        <div className="lg:mb-20 mb-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-[#706F6F] text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 text-[#706F6F] text-lg px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="size-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <button className="h-11 w-[140px] text-xl font-semibold text-white bg-[#403F3F] btn !rounded-none">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;