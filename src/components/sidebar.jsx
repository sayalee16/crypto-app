import { IoMdHome } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { RiExchangeFundsFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from "react-router-dom";
const SideBar = ({selectedTab, setSelectedTab}) => {

    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "20%"}} >
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <BsCurrencyExchange />
      <span className="fs-4" style={{margin: "5px"}}>Cryptocurrencies</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => setSelectedTab("Home")}>
        <Link to="/" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`} aria-current="page">
        <IoMdHome  style={{margin: "5px"}}/>
          Home
        </Link>
      </li>
      <li onClick={() => setSelectedTab("Cryptocurrencies")}>
        <Link to="/crypto-currency" className={`nav-link text-white ${selectedTab === 'Cryptocurrencies' && 'active'}`} >
          <AiOutlineStock style={{margin: "5px"}}/>
          Cryoptocurrencies
        </Link>
      </li>
      
      <li onClick={() => setSelectedTab("News")}>
        <Link to="/news" className={`nav-link text-white ${selectedTab === 'News' && 'active'}`} >
        <FaLightbulb style={{margin: "5px"}} />
          News
        </Link>
      </li>
    </ul>
    <hr/>
    
      </div>
       
    );
};
export default SideBar;