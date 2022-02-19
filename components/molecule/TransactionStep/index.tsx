// import Image from "next/image";

interface props {
  icon: "transaction-1" | "transaction-2" | "transaction-3";
  title: string;
  subtitle: string;
}

const TransactionStep = ({ icon, title, subtitle }: props) => (
  <div className="col-lg-4">
    <div className="card feature-card border-0">
      <img
        className="mb-30"
        src={`/icon/${icon}.svg`}
        width={80}
        height={80}
        alt="icon-step"
      />
      <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
      <p className="text-lg color-palette-1 mb-0">{subtitle}</p>
    </div>
  </div>
);

export default TransactionStep;
