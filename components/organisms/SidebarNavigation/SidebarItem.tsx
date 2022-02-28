import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  url: string;
  title: string;
  active?: boolean;
}

const SidebarItem = ({ url, title, active }: props) => {
  const iconName = title.toLowerCase().replace(" ", "-");
  const activeItem = active ? "active" : "";

  return (
    <div className={`item mb-30 ${activeItem}`}>
      <div className="icon me-3">
        <Image
          src={`/icon/${iconName}.svg`}
          width={25}
          height={25}
          alt={title}
        />
      </div>

      <p className="item-title m-0">
        <Link href={url}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default SidebarItem;
