import React from "react";
import Button from "./HopeButton";
import { useNavigate } from "react-router-dom";

interface TableRowProps {
  headers: string[];
  data: any;
}

const TableRow: React.FC<TableRowProps> = ({ headers, data }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
        {headers.map((header, index) => (
          <td key={index} className="px-4 py-2">
            {data[header]}
          </td>
        ))}
        <td className="px-4 py-2">
          <Button text="View" onClick={() => navigate(data.id)} />
        </td>
      </tr>
      <tr className="w-full h-[12px] bg-bgblue rounded-lg"></tr>
    </>
  );
};
interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr className="bg-bgblue text-main border border-bgblue border-b-[16px]">
        {headers.map((header, index) => (
          <th className="px-4 py-2 text-left" key={index}>
            {header.toUpperCase()}
          </th>
        ))}
        <th className="px-4 py-2"></th>
      </tr>
    </thead>
  );
};

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = Object.keys(data[0]);
  return (
    <div className="px-4 container mx-auto mt-10 w-full max-h-[95%] overflow-scroll">
      <table className="min-w-full h-full border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.map((item, index) => {
            return <TableRow key={index} headers={headers} data={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
