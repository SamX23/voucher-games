import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import NavigationBar from "../components/organisms/NavigationBar";
import Header from "../components/organisms/MainBanner";
import Transaction from "../components/organisms/TransactionSection";
import FeatureGame from "../components/organisms/FeatureGame";
import ReachSection from "../components/organisms/ReachSection";
import StorySection from "../components/organisms/StorySection";
import FooterSection from "../components/organisms/FooterSection";

const Home: NextPage = () => {
  useEffect(() => AOS.init(), []);

  return (
    <>
      <NavigationBar />
      <Header />
      <Transaction />
      <FeatureGame />
      <ReachSection />
      <StorySection />
      <FooterSection />
    </>
  );
};

export default Home;
