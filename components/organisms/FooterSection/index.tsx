import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30" aria-label="logo">
                  <Image
                    src="/icon/logo.svg"
                    width={60}
                    height={60}
                    alt="Logo"
                  />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2022 - Sami Kalammallah
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Press Release
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Terms of Use
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Privacy & Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Refund Policy
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Unlock Rewards
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Live Chatting
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto:skalexsong+web@gmail.com"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        skalexsong+web@gmail.com
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 089657511134"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        +6289-6575-11134
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
