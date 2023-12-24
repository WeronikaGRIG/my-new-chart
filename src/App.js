
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Работа", 9],
  ["Спорт", 2],
  ["Учеба", 4],
  ["Время для семьи", 3],
  ["Отдых, сон", 7],
];

const options = {
  title: "Мой продуктивный день",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
