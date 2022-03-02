import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../components/organisms/RegisterForm";

const Register = () => (
  <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
    <div className="container mx-auto">
      <form action="">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={50} height={50} alt="logo" />
            </a>
          </Link>
        </div>
        <RegisterForm />
      </form>
    </div>
  </section>
);

export default Register;
