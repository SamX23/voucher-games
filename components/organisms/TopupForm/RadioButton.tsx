import Image from "next/image";
import React from "react";

interface props {
  id: string;
  title: string;
  desc: string;
  type: string;
}

const RadioButton = ({ id, title, desc, type }: props) => {
  return (
    <>
      {type == "topup" ? (
        <label
          className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
          htmlFor={id}
        >
          <input
            className="d-none"
            type="radio"
            id={id}
            name="topup"
            value={id}
          />
          <div className="detail-card">
            <div className="d-flex justify-content-between">
              <p className="text-3xl color-palette-1 m-0">
                <span className="fw-medium">{title}</span>
                Gold
              </p>
              <Image
                id="icon-check"
                src="/icon/check.svg"
                width={20}
                height={20}
                alt="check"
              />
            </div>
            <p className="text-lg color-palette-1 m-0">{desc}</p>
          </div>
        </label>
      ) : (
        <label
          className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
          htmlFor={id}
        >
          <input
            className="d-none"
            type="radio"
            id={id}
            name="paymentMethod"
            value={id}
          />
          <div className="detail-card">
            <div className="d-flex justify-content-between">
              <p className="text-3xl color-palette-1 m-0">
                <span className="fw-medium">{title}</span>
                Gold
              </p>
              <Image
                id="icon-check"
                src="/icon/check.svg"
                width={20}
                height={20}
                alt="check"
              />
            </div>
            <p className="text-lg color-palette-1 m-0">{desc}</p>
          </div>
        </label>
      )}
    </>
  );
};

export default RadioButton;
