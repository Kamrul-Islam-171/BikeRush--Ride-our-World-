import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
// import Headroom from 'react-headroom';

const HomePage = () => {
  return (
    <div>
      
      <div className="">
        {/* <Headroom> */}

        <NavigationBar></NavigationBar>
        {/* </Headroom> */}
      </div>
      <div className="max-w-[1600px] mx-auto mt-10 min-h-screen">
        <div className="ml-3 mr-3">
          <Outlet></Outlet>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
