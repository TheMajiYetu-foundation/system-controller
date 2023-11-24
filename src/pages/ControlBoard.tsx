import Conditions from "../components/charts/Conditions";
import TemperatureData from "../components/charts/TemperatureData";


export default function ControlBoard() {
  return (
    <div className="px-2">
      <div className="h-96 mb-5">
      <TemperatureData/>
      </div>
      <Conditions/>
    </div>
  )
}
