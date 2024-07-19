import millify from "millify";
const GlobalCrypto = ({data}) => {
    return (
        <>
            <div >
    <nav className="navbar bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Global Crypto Stats
      </a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-md-5 g-6 " style={{margin: "10px"}}>
    <div className="col">
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Currencies</h5>
          <p className="card-text">{millify(data.data.totalCoins)}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Exchanges</h5>
          <p className="card-text">{millify(data.data.totalExchanges)}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Market Cap</h5>
          <p className="card-text">{millify(data.data.totalMarketCap)}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Total 24h Vol</h5>
          <p className="card-text">{millify(data.data.total24hVolume)}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Market</h5>
          <p className="card-text">{millify(data.data.totalMarkets)}</p>
        </div>
      </div>
    </div>
  </div> 
    </div> 
        </>
    )
}
export default GlobalCrypto;