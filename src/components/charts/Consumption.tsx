import { Cell, Legend, Pie, PieChart } from "recharts";

const data = [
    { name: 'Morning', value: 400 },
    { name: 'Afternoon', value: 300 },
    { name: 'Evening', value: 300 },
    
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Consumption() {
  return (
    <div className="px-4 py-1 bg-base-200 mx-2 rounded-md">
      <div className="flex justify-between py-2 border-b ">
        <h1 className="tex-xl font-bold">Agricultural Water</h1>
        <span>+</span>
      </div>
    <PieChart width={400} height={200}>
    <Pie
    data={data}
    cx={120}
    cy={100}
    innerRadius={60}
    outerRadius={80}
    fill="#8884d8"
    paddingAngle={2}
    dataKey="value"

    >
         {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
    </Pie>
    <Legend verticalAlign="middle" align="right" width={40}/>
    </PieChart>
    </div>
  );
}
