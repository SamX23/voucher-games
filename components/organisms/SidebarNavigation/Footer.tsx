import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <Image
            src="/icon/sidebar-footer.svg"
            width={50}
            height={50}
            alt="footer logo"
          />

          <p className="fw-medium color-palette-1">
            Top Up &<br />
            Be The Winner
          </p>
        </div>
        <Link href="/">
          <a
            className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
            role="button"
          >
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
