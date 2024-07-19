import useFetchCrypto from "../services/useFectchCrypto";
import LoadingSpinner from "./loadingSpinner";
const TopTenCrypto = () => {
  const { crypto, isLoadingcoin, cerror } = useFetchCrypto(
    "https://cryptocurrency-market.p.rapidapi.com/api/crypto"
  );console.log(crypto);
  return (
    <>
    
    <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">
            Top 10 Cryptocurrencies in the world
            <a href="/crypto-currency" type="button" class="btn btn-primary btn-sm show-more">
              Show More
            </a>
          </h1>
        </div>
      </nav>
      {crypto && 
        <div style={{margin: "30px"}}>
          {crypto.result.slice(0,10).map(item => (
            <div class="card mb-3 " key={item.id} style={{ width: '60%' }}>
              <div class="row g-0 ">
                <div class="col-md-4 ">
                  <img
                    src={item.image}
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      MarketCap rank: {item.market_cap_rank}
                    </p>
                    <p class="card-text">Current Price: {item.current_price}</p>
                    <p class="card-text">Lowest in 24hr : {item.low_24}</p>
                    <p class="card-text">Highest in 24hr: {item.high_24h}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
}
      
   
      
    </>
  );
};
export default TopTenCrypto;
