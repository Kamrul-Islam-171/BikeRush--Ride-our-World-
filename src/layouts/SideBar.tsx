
import { Layout, Menu, theme } from "antd";

import { Outlet } from "react-router-dom";
import { CustomarSidebarItems } from "../routes/customerSidebarRoutesItems";
import { useAppSelector } from "../redux/features/hook";
import { selectCurrenttoken } from "../redux/features/auth/AuthSlice";
import { VerifyToken } from "../utils/verifyToken";
import { AdminSidebarItems } from "../routes/adminSidebarRoutesItesm";
import { TUserRole } from "../types/user";

const {  Sider } = Layout;


const SideBar = () => {

    let customarSidebarItems;
    let user;
    
    const token = useAppSelector(selectCurrenttoken);
    if(token) {
      user = VerifyToken(token);
    }
    // customarSidebarItems = AdminSidebarItems('admin');
    if((user as TUserRole)?.role === 'admin') {
      customarSidebarItems = AdminSidebarItems('admin');
    }
    else if((user as TUserRole)?.role === 'customer') {
      customarSidebarItems = CustomarSidebarItems('customer');
    } 
 
  return (
    <div>
      <Layout className="">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{height: "100vh", position:"sticky", top: "0", left:"0"}}
        >
          {/* <div className="text-gray-300 flex justify-center text-3xl">Logo</div> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={customarSidebarItems}
            className="mt-3"
          />
        </Sider>
        <Layout className="p-4">
          

          <Outlet></Outlet>
          
        </Layout>
      </Layout>
    </div>
  );
};

export default SideBar;
