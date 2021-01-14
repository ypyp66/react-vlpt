import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); //로딩여부, 처음에는 false로

  useEffect(() => {
    //async를 사용하는 함수를 따로 선언
    const fetchData = async () => {
      setLoading(true); //데이터 로딩시작 -> 로딩중을 true로
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1532e4aa237d48c1bfbac66d3e97a711`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false); //로딩이 끝나면 로딩여부를 다시 false로
      console.log(loading);
    };
    fetchData(); //useEffect가 실행되면 fetchData() 함수를 실행
  }, [category]);

  if (loading) {
    //loading중이면
    return <NewsListBlock>Loading중...</NewsListBlock>;
  }

  if (!articles) {
    //articles에 값이 없으면
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} articles={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
