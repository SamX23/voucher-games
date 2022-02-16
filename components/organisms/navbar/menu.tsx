import Link from "next/link";

interface MenuProps {
  title: string;
  href: string;
  active?: boolean;
  liClass?: string;
}

// eslint-disable-next-line object-curly-newline
const Menu = ({ title, href, active, liClass }: MenuProps, ...rest: any) => {
  const activeClass = active ? "nav-link active" : "nav-link";
  return (
    <li className={liClass}>
      <Link href={href}>
        <a className={activeClass} aria-current="page" {...rest}>
          {title}
        </a>
      </Link>
    </li>
  );
};

Menu.defaultProps = {
  active: false,
  liClass: "nav-item my-auto",
};

export default Menu;
