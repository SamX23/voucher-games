import Image from "next/image";

interface props {
  avatar: string;
  name: string;
  email: string;
}

const SidebarAvatar = ({ avatar, name, email }: props) => {
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={avatar}
        width={90}
        height={90}
        className="img-fluid mb-20"
        alt="avatar"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{name}</h2>
      <p className="color-palette-2 m-0">{email}</p>
    </div>
  );
};

export default SidebarAvatar;
