import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import sensorInfo from '../../data/flow_sensors.json';
import { SensorType } from '../../types/sensors';


export default function AverageWaterConsumption() {

  const flowSensors:SensorType[] = [];
  sensorInfo.flowSensors.map((sensor) => {
    flowSensors.push({...sensor,readings:sensor.readings.map((reading) => {
      return {...reading,timestamp: new Date(reading.timestamp)}
    })})
    //console.log(sensor)
  })
  const chartData = flowSensors.map((sensor) => {
    return {name:sensor.sensor_id,mrn:sensor.readings.filter((reading) => {
      return reading.timestamp.getHours() >= 0 && reading.timestamp.getHours() <= 11
    }).map((reading) => {
      return reading.value
    }).reduce((a,b) => a + b,0),afn:sensor.readings.filter((reading) => {
      return reading.timestamp.getHours() >= 12 && reading.timestamp.getHours() <= 17
    }).map((reading) => {
      return reading.value
    }).reduce((a,b) => a + b,0),evn:sensor.readings.filter((reading) => {
      return reading.timestamp.getHours() >= 18 && reading.timestamp.getHours() <= 23
    }).map((reading) => {
      return reading.value
    }).reduce((a,b) => a + b,0)}
  })
  console.log(chartData)
  // console.log(flowSensors)
  // const sensorReadings = flowSensors.map((sensor) => {
  //   return sensor.readings.map((reading) => {
  //     return reading.value
  //   })
  // })
  // console.log(sensorReadings)
  // const morningReadings = flowSensors.map((sensor) => {
  //   return sensor.readings.filter((reading) => {
  //     return reading.timestamp.getHours() >= 0 && reading.timestamp.getHours() <= 11
  //   })
  // })
  // console.log(`morning readings ${morningReadings}`)
  // const afternoonReadings = flowSensors.map((sensor) => {
  //   return sensor.readings.filter((reading) => {
      
  //     return reading.timestamp.getHours() >= 12 && reading.timestamp.getHours() <= 17
  //   })
  // })
  // console.log(`afternoon readings ${afternoonReadings}`)
  // const eveningReadings = flowSensors.map((sensor) => {
  //   return sensor.readings.filter((reading) => {
  //     return reading.timestamp.getHours() >= 18 && reading.timestamp.getHours() <= 23
  //   })
  // })
  // console.log(`evening readings ${eveningReadings}`)
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
          data={chartData}
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
