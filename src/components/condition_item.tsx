const consumptionData = [
  {
    pipe: "1",
    temp: 20,
    status: "Possibility of breaking",
  },
];

export default function ConditionItem() {
  return (
    <div className="py-1 grid grid-cols-6 px-2">
      {consumptionData.map((item) => {
        return (
          <>
            <h1 className="text-white">ID#{item.pipe}</h1>
            <h1 className="text-white">Alert</h1>
            <h1 className="text-white">{item.temp}</h1>
            <h1 className="text-white col-span-3">{item.status}</h1>
          </>
        );
      })}
    </div>
  );
}
