import { Link } from 'react-router-dom';
import bookmark from '../../assets/bookmark.svg';
import share from '../../assets/share.svg';
import star from '../../assets/star.svg';
import eye from '../../assets/eye.svg';
import PropTypes from 'prop-types';

const News = ({ news }) => {
    const {
        _id,
        rating,
        total_view,
        title,
        author,
        image_url,
        details } = news;

    return (
        <div className='mb-[30px]'>
            <div className="h-20 min-w-full rounded-t-[5px] bg-[#F3F3F3] px-5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className='size-10 rounded-[50%] ' src={author?.img} alt="" />
                    <div className="">
                        <h3 className="font-semibold mb-2">{author?.name}</h3>
                        <p className="text-[#706F6F]">{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img src={bookmark} alt="" />
                    <img src={share} alt="" />
                </div>
            </div>
            <div className="px-5 pt-4 rounded-b-[5px] border-[1px] border-[#E7E7E7] border-t-0">
                <h3 className='text-xl font-bold leading-[35px]  mb-5'>{title}</h3>
                <img className='h-[262px] w-full rounded-[5px] mb-8' src={image_url} alt="" />
                <div className='text-[#706F6F] line-clamp-4 leading-7'><span>{details}</span> ........</div>
                <Link to={`/news/${_id}`}><button className='mt-2 text-[#FF8C47] font-medium'>Read More...</button></Link>
                <hr className='min-w-full h-[1px] bg-[#E7E7E7] my-5' />
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="*:size-6 flex items-center gap-1">
                            <img src={star} alt="" />
                        </div>
                        <p className='font-medium text-[#706F6F]'>{rating?.number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={eye} alt="" />
                        <p className='font-medium text-[#706F6F]'>{total_view ? total_view : '0'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object,
};

export default News;