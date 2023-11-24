import AverageWaterConsumption from "../components/charts/AverageWaterConsumption";
import Consumption from "../components/charts/Consumption";
import WasteWater from "../components/charts/WasteWater";
import WaterChart from "../components/charts/WaterChart";

export default function Home() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 px-1 gap-x-7 gap-y-5">
     <Consumption/>
      <AverageWaterConsumption/>
      <WaterChart/>
      <WasteWater/>
    </div>
  );
}
