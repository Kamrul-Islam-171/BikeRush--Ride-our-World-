import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="max-w-[1600px] mx-auto mt-[64px]">
        <div className="ml-3 mr-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
