import Image from "next/image";
import Link from "next/link";
import MenuAuth from "./MenuAuth";
import Menu from "./MenuLink";
import ToggleMenu from "./ToggleMenu";

const NavigationBar = () => (
  <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" aria-label="logo">
            <Image src="/icon/logo.svg" width={60} height={60} alt="" />
          </a>
        </Link>
        <ToggleMenu />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
            <Menu title="Games" href="/" active />
            <Menu title="Rewards" href="/" />
            <Menu title="Discover" href="/" />
            <Menu
              title="Global Rank"
              href="/"
              liClass="nav-item my-auto me-lg-20"
            />
            <MenuAuth isLogin />
          </ul>
        </div>
      </div>
    </nav>
  </section>
);

export default NavigationBar;
