import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr className="color-palette-1">
          <th className="text-start" scope="col">
            Game
          </th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          title="Mobile Legends: The New Battle 2021"
          subtitle="Desktop"
          gold="200"
          price="290.000"
          image="1"
          status="Pending"
        />
        <TableRow
          title="Call of Duty:Modern"
          subtitle="Desktop"
          gold="550"
          price="740.000"
          image="2"
          status="Success"
        />
        <TableRow
          title="Clash of Clans"
          subtitle="Mobile"
          gold="100"
          price="120.000"
          image="3"
          status="Failed"
        />
        <TableRow
          title="The Royal Game"
          subtitle="Mobile"
          gold="225"
          price="200.000"
          image="4"
          status="Pending"
        />
      </tbody>
    </table>
  );
};

export default Table;
