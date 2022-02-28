import Link from "next/link";
import Footer from "./Footer";
import SidebarAvatar from "./SidebarAvatar";
import SidebarItem from "./SidebarItem";

const Sidebar = () => (
  <section className="sidebar">
    <div className="content pt-50 pb-30 ps-30">
      <SidebarAvatar
        avatar="/img/avatar-1.png"
        name="Shayna Anne"
        email="shayna@anne.com"
      />
      <div className="menus">
        <SidebarItem url="/member" title="Overview" active />
        <SidebarItem url="/" title="Transactions" />
        <SidebarItem url="/" title="Messages" />
        <SidebarItem url="/" title="Card" />
        <SidebarItem url="/" title="Rewards" />
        <SidebarItem url="/" title="Settings" />
        <SidebarItem url="/" title="Log Out" />
      </div>
      <Footer />
    </div>
  </section>
);

export default Sidebar;
