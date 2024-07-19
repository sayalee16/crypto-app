import SideBar from "./components/sidebar";
import Home from "./components/home";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Outlet></Outlet>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
