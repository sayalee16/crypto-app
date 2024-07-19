import useFetch from "../services/useFetch";
import { useEffect } from "react";
import LoadingSpinner from "./loadingSpinner.jsx";
import GlobalCrypto from "./globalCrypto.jsx";
import TopTenCrypto from "./topTenCrypto.jsx";
import LatestNews from "./lastestNews.jsx";
import useFetchNews from "../services/useFetchNews.jsx";
import Ques from "./ques.jsx";
const Home = () => {
  
  const {data, isLoading, error}= useFetch("https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl");
  
  const { news, isLoadingnews, nerror } = useFetchNews('https://crypto-news16.p.rapidapi.com/news/coincu');


  return (
    <>
    {isLoading && <LoadingSpinner/>}
    {!isLoading && data && <GlobalCrypto  data={data}/>}
    {!isLoading && <TopTenCrypto/>}
    {!isLoading && news && <LatestNews news={news}/> }  
     {!isLoading && <Ques></Ques>} 
    </>
  );
};
export default Home;
