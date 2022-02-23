import Image from "next/image";

interface props {
  title: string;
  category: string;
  imageId: string;
}

const CheckoutItem = ({ title, category, imageId }: props) => {
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            src={`/img/Thumbnail-${imageId}.png`}
            className="img-fluid"
            width={200}
            height={250}
            alt="Thumbnail"
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{title}</p>
        <p className="color-palette-2 m-0">Category: {category}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
