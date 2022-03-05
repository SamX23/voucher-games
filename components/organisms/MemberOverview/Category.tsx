import Image from "next/image";

interface props {
  img: "desktop" | "mobile" | "other";
  title: string;
  nominal: string;
}

const Category = ({ img, title, nominal }: props) => {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${img}.svg`} width={60} height={60} alt="title" />
          <p className="color-palette-1 mb-0 ms-12">{title}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{nominal}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
