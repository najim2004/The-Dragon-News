import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import News from "./News";
const NewsHome = () => {
    const [filterNews, setFilterNews] = useState([]);
    const { id } = useParams();
    const allNews = useLoaderData();
    
    useEffect(() => {
        if (id == 0 || !id) {
            setFilterNews(allNews);
        }
        else {
            setFilterNews(allNews?.filter(news => news.category_id === id));
        }
    }, [allNews, id])
    return (
        <div className="">
            {
                filterNews?.map((news, index) => <News key={index} news={news}></News>)
            }
        </div>
    );
};


export default NewsHome;