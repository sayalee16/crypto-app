import useFetchNews from "../services/useFetchNews";
import LoadingSpinner from "./loadingSpinner";
const News = () => {
  const { news, isLoadingnews, nerror } = useFetchNews(
    'https://crypto-news16.p.rapidapi.com/news/coincu'
  );
  console.log(news);

  return (
    <>
    {isLoadingnews && <LoadingSpinner/>}
    {news &&
    <div>
        {news.map(item => (
            <div class="card">
            <div class="card-body">
            <a href={item.url} class="card-title h5">{item.title}</a>
              <p class="card-text">{item.description}</p>
           </div>
          </div>
        ))}
  </div>
    }
      
    </>
  );
};
export default News;
