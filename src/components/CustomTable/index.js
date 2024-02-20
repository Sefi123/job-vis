import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Particular", "Duration", "Purchase Date", "Amount"];

const TABLE_ROWS = [
  {
    particular: "One Time Payment",
    duration: "For 2 Weeks",
    date: "23/04/18",
    amount: "$223"
  },
  {
    particular: "Subscribe Membership",
    duration: "Per Week",
    date: "23/04/18",
    amount: "$438"
  },
  {
    particular: "One Time Payment",
    duration: "For 3 Months",
    date: "19/09/17",
    amount: "$92"
  },
  {
    particular: "One Time Payment",
    duration: "Per Week",
    date: "24/12/08",
    amount: "$311"
  },
  {
    particular: "Subscribe Membership",
    duration: "Per Month",
    date: "04/10/21",
    amount: "$543"
  },
];

const CustomTable = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-[#E8EDFB] p-4"
              >
                <Typography
                  variant="small"
                  color="#777980"
                  className="font-normal text-[1.1rem] text-[#777980] leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ particular, duration, date, amount }, index) => (
            <tr key={index} className="even:bg-[#F6F8FA]">
              <td className="p-4">
                <Typography
                  variant="small"
                  // color="blue-gray"
                  className="font-normal text-[#1D1F2C] text-[1.5rem]"
                >
                  {particular}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  // color="blue-gray"
                  className="font-normal text-[#1D1F2C] text-[1.5rem]"
                >
                  {duration}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  // color="blue-gray"
                  className="font-normal text-[#1D1F2C] text-[1.5rem]"
                >
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  // color="blue-gray"
                  className="font-normal text-[#1D1F2C] text-[1.5rem]"
                >
                  {amount}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
export default CustomTable;
