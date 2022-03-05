import Image from "next/image";
import Category from "./Category";
import Table from "./Table";

const MemberOverview = () => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category
                img="desktop"
                title="Game Desktop"
                nominal="Rp 18.000.500"
              />
              <Category
                img="mobile"
                title="Game Mobile"
                nominal="Rp 8.455.000"
              />
              <Category
                img="other"
                title="Other Categories"
                nominal="Rp 5.000.000"
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MemberOverview;
