import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='lg:mt-[50px] mb-7 flex flex-col justify-center items-center'>
            <Link to={'/category/0'}><img src={logo} alt="" /></Link>
            <p className="mt-5 mb-[10px] text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-[#706F6F]"><span className='text-[#403F3F]'>{moment().format("dddd")},</span> {moment().format("MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;