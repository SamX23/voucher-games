import Image from "next/image";
import React from "react";

interface props {
  avatar: string;
  name: string;
  email: string;
}

const UserData = ({ avatar, name, email }: props) => {
  return (
    <>
      <div className="mb-20">
        <div className="image-upload text-center">
          <label htmlFor="avatar">
            {avatar ? (
              <Image
                src="/img/avatar-1.png"
                width={120}
                height={120}
                className="rounded-circle"
                alt="avatar"
              />
            ) : (
              <Image
                src="/icon/avatar-placeholder.svg"
                width={120}
                height={120}
                alt="avatar placeholder"
              />
            )}
          </label>
          <input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>

      <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
        {name}
      </h2>
      <p className="text-lg text-center color-palette-1 m-0">{email}</p>
    </>
  );
};

export default UserData;
