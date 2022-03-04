import MemberOverview from "../../components/organisms/MemberOverview";
import Sidebar from "../../components/organisms/SidebarNavigation";

const Overview = () => (
  <section className="overview overflow-auto">
    <Sidebar />
    <MemberOverview />
  </section>
);

export default Overview;
