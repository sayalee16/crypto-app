const LatestNews = ({news}) => {
   console.log(news);
    return (
        <>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">
             Crypto News
            <a href="/news"type="button" class="btn btn-primary btn-sm show-more-2">
              Show More
            </a>
          </h1>
        </div>
      </nav>

      <div class="card-group">
       
            <div class="card">
            <div class="card-body">
            <a href={news[0].url} class="card-title h5">{news[0].title}</a>
              <p class="card-text">{news[0].description}</p>
           </div>
          </div>
      
  
          <div class="card" >
            <div class="card-body">
              <a href={news[1].url} class="card-title h5">{news[1].title}</a>
              <p class="card-text">{news[1].description}</p>
           </div>
          </div>
          <div class="card">
            <div class="card-body">
            <a href={news[2].url} class="card-title h5">{news[2].title}</a>
              <p class="card-text">{news[2].description}</p>
           </div>
          </div>
</div>


        </>
    )
}
export default LatestNews;