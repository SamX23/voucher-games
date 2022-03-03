import MemberOverview from "../../components/organisms/MemberOverview";
import Sidebar from "../../components/organisms/SidebarNavigation";

const Overview = () => (
  <section className="Overview overflow-auto">
    <Sidebar />
    <MemberOverview />
  </section>
);

export default Overview;
