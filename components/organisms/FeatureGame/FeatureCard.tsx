import Image from "next/image";
import Link from "next/link";

interface props {
  title: string;
  category: string;
  order: "1" | "2" | "3" | "4" | "5";
}

const FeatureCard = ({ title, category, order }: props) => (
  <div className="featured-game-card position-relative">
    <Link href="/detail">
      <a>
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/Thumbnail-${order}.png`}
            width={205}
            height={270}
            layout="fixed"
            alt={`thumbnail-${order}`}
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/console.svg"
                alt="console"
                width={54}
                height={36}
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category} </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default FeatureCard;
