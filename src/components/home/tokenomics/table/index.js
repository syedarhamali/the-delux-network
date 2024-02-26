const people = [
  {
    tokens: "IDO Distribution 1",
    price: ".005",
    supply: "5%",
  },
  {
    tokens: "IDO Distribution 2",
    price: "0.011",
    supply: "5%",
  },
  {
    tokens: "IDO Distribution 3",
    price: "0.23",
    supply: "5%",
  },
  {
    tokens: "NFT Distribution",
    price: "---",
    supply: "7.5%",
  },
  {
    tokens: "In-Game Sales Pool",
    price: "---",
    supply: "1.5%",
  },
  {
    tokens: "Staking Rewards",
    price: "---",
    supply: "7%",
  },
  {
    tokens: "Liquidity",
    price: "---",
    supply: "9%",
  },
  {
    tokens: "Marketing",
    price: "---",
    supply: "12%",
  },
  {
    tokens: "P2P Rewards",
    price: "---",
    supply: "10%",
  },
  {
    tokens: "Treasury",
    price: "---",
    supply: "11%",
  },
  {
    tokens: "M&A Reserve",
    price: "---",
    supply: "12%",
  },
  {
    tokens: "Team",
    price: "---",
    supply: "5%",
  },
  {
    tokens: "Advisors & Consultants",
    price: "---",
    supply: "10%",
  },
];

const TokenomicsTable = () => {
  return (
    <table className="border divide-y divide-gray-300 rounded-lg min-w-max">
      <thead>
        <tr>
        <th
            scope="col"
            className="px-3 py-1 text-sm font-semibold text-left text-white"
          >
            Tokens
          </th>
          <th
            scope="col"
            className="px-3 py-1 text-sm font-semibold text-left text-white"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-3 py-1 text-sm font-semibold text-left text-white"
          >
            Supply%
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {people.map((person) => (
          <tr key={person.tokens}>
            <td className="px-3 py-1.5 text-sm text-white whitespace-nowrap">
              {person.tokens}
            </td>
            <td className="px-3 py-1.5 text-sm text-white whitespace-nowrap">
              {person.price}
            </td>
            <td className="px-3 py-1.5 text-sm text-white whitespace-nowrap">
              {person.supply}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TokenomicsTable;
