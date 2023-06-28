import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsListCards from "../../../components/NewsCards/Cards";

const NewsListIndex = ({ source, sortBy }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);

        const NewsApiUri = "https://newsapi.org/v2/";
        const NewsApiKey = "347cc013193b4d47b867938c2ef7076c";

        const url = `${NewsApiUri}top-headlines?country=fr&q=coronavirus&apiKey=${NewsApiKey}`;

        const apiResponse = await fetch(url);
        const news = await apiResponse.json();
        console.log(news);

        setNews(news.articles);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    getNews();
  }, [source, sortBy]);

  return (
    <>
      {loading ? <div className="overlay" /> : null}
      <NewsListCards data={news} />
    </>
  );
};

export default NewsListIndex;
