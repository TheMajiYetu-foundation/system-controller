import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts";



const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'April',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'May',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'June',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'July',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];




export default function WaterChart() {
  return (
    <div className="bg-base-200 py-2 px-6 rounded-md mx-2">
        <div className="flex justify-between py-2 border-b ">
            <h1 className="text-xl font-bold">Monthly Water Consumption</h1>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
