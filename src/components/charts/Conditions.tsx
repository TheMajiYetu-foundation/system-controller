import { FiAlertTriangle, FiBell } from "react-icons/fi";
const consumptionData = [
  {
    pipe: "1",
    temp: 20,
    status: "Risk of breaking,to change now",
  },
  {
    pipe: "2",
    temp: 60,
    status: "Risk of breaking,to change now",
  },
  {
    pipe: "3",
    temp: 50,
    status: "Early warning",
  },
  {
    pipe: "4",
    temp: 40,
    status: "Early warning",
  },
];
export default function Conditions() {
  return (
    <div className="mt-6 py-2 px-4">
      <div className="bg-gray-800 py-1 grid grid-cols-7 px-2">
        <h1 className="text-white">Pipe</h1>
        <h1 className="text-white">Alert</h1>
        <h1 className="text-white">Temp</h1>

        <h1 className="text-white col-span-3">Status</h1>
      </div>
      <div className="py-1 grid grid-cols-7 px-2 gap-y-3 border-b-2 border-b-gray-400 ">
        {consumptionData.map((item) => {
          return (
            <>
              <h1 className="text-gray-500">ID#{item.pipe}</h1>
              {item.temp < 50 ? (<h1 className="text-orange-500"><FiBell /></h1>):(<h1 className="text-red-700"><FiAlertTriangle /></h1>)}
              <h1 className="text-gray-500">{item.temp}</h1>
              <h1 className="text-gray-500 col-span-3">{item.status}</h1>
              <button type="button" className="btn btn-sm btn-success">Take Action</button>
            </>
          );
        })}
      </div>
    </div>
  );
}
