interface props {
  title: string;
  subtitle: string;
  gold: string;
  price: string;
  image: "1" | "2" | "3" | "4";
  status: "Pending" | "Success" | "Failed";
}

const TableRow = ({ title, subtitle, gold, price, image, status }: props) => {
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/overview-${image}.png`}
          width="80"
          height="60"
          alt={title}
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {subtitle}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{gold} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp. {price}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status.toLowerCase()}`} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
