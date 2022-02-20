import Link from "next/link";

interface MenuProps {
  title: string;
  href: string;
  active?: boolean;
  liClass?: string;
}

const MenuLink = ({ title, href, active, liClass }: MenuProps) => {
  const activeClass = active ? "nav-link active" : "nav-link";
  return (
    <li className={liClass}>
      <Link href={href}>
        <a className={activeClass} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

MenuLink.defaultProps = {
  active: false,
  liClass: "nav-item my-auto",
};

export default MenuLink;
