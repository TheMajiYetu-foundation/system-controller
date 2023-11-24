import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      name: 'Jan',
      mrn: 4000,
      afn: 2400,
      evn: 2400,
    },
    {
      name: 'Feb',
      mrn: 3000,
      afn: 1398,
      evn: 2210,
    },
    {
      name: 'Mar',
      mrn: 2000,
      afn: 9800,
      evn: 2290,
    },
    {
      name: 'Apr',
      mrn: 2780,
      afn: 3908,
      evn: 2000,
    },
    {
      name: 'May',
      mrn: 1890,
      afn: 4800,
      evn: 2181,
    },
    {
      name: 'Jun',
      mrn: 2390,
      afn: 3800,
      evn: 2500,
    },
    {
      name: 'Jul',
      mrn: 3490,
      afn: 4300,
      evn: 2100,
    },
  ];
export default function AverageWaterConsumption() {
  return (
   <div className='bg-base-200 py-2 px-6 rounded-md mx-2'>
    <div className="flex justify-between py-2 border-b ">
            <h1 className="text-xl font-bold">Average Water Consumption</h1>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </span>
        </div>
     <ResponsiveContainer width="100%"height={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mrn" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="afn" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="evn" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
   </div>
  )
}
