import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  url: string;
  title: string;
  active?: string;
}

const SidebarItem = ({ url, title, active }: props) => {
  return (
    <div className={`item mb-30 ${active}`}>
      <div className="icon me-3">
        <Image
          src={`/icon/${title.toLowerCase().replace(" ", "-")}.svg`}
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
