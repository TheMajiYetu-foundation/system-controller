import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      name: '#1',
      temp: 60,
    },
    {
      name: '#2',
      temp: 12,
    },
    {
      name: '#3',
      temp: 70,
    },
    {
      name: '#4',
      temp: 60,
    },
    {
      name: '#5',
      temp: 30,
    },
    {
      name: '#6',
      temp: 10,
    },
    {
      name: '#7',
      temp: 20,
    },
  ];
export default function TemperatureData() {
  return (
   <div className='bg-base-200 py-2 px-6 rounded-md mx-2'>
    <div className="flex justify-between py-2 border-b ">
            <h1 className="text-xl font-bold">Temperature</h1>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </span>
        </div>
    <ResponsiveContainer width="100%" height={300}>
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
          <Bar dataKey="temp" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          
        </BarChart>
      </ResponsiveContainer>
   </div>
  )
}
