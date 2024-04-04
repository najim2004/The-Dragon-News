
import PropTypes from 'prop-types';

const News = ({ news }) => {
    return (
        <div className='mb-[30px]'>
            <div className="h-20 min-w-full mb-4 rounded-t-[5px] bg-[#F3F3F3] px-5 flex items-center">
                <div className="flex items-center gap-4">
                    <img className='size-10 rounded-[50%] ' src="" alt="" />
                    <div className="">
                        <h3 className="font-semibold mb-2"></h3>
                        <p className="text-[#706F6F]"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired,
};

export default News;