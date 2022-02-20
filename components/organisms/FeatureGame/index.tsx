import FeatureCard from "./FeatureCard";

const FeatureGame = () => (
  <section className="featured-game pt-50 pb-50">
    <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">
        Our Featured
        <br /> Games This Year
      </h2>
      <div
        className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
        data-aos="fade-up"
      >
        <FeatureCard order="1" title="Super Mechs" category="Mobile" />
        <FeatureCard order="2" title="Call of Duty: Modern" category="Mobile" />
        <FeatureCard order="3" title="Mobile Legends" category="Mobile" />
        <FeatureCard order="4" title="Clash of Clans" category="Mobile" />
        <FeatureCard order="5" title="Valorant" category="Desktop" />
      </div>
    </div>
  </section>
);

export default FeatureGame;
