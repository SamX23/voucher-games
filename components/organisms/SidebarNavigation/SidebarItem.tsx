import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  url: string;
  title: string;
}

const SidebarItem = ({ url, title }: props) => {
  return (
    <div className="item active mb-30">
      <Image
        className="icon me-3"
        src={`/icon/${title.toLowerCase().replace(" ", "-")}.svg`}
        width={25}
        height={25}
        alt={title}
      />
      <p className="item-title m-0">
        <Link href={url}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default SidebarItem;
