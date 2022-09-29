import { useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const [sportData, setSportData] = useState([
    { id: 0, date: 2021, name: "Фитнес", count: 2, distance: 22 },
    { id: 1, date: 2019, name: "Физ.Культура", count: 5, distance: 45 },
    { id: 2, date: 2018, name: "Атлетика", count: 3, distance: 66 },
    { id: 3, date: 2022, name: "Бег", count: 7, distance: 36 },
    { id: 4, date: 2023, name: "Прыжки", count: 1, distance: 21 },
    { id: 5, date: 2013, name: "Отжимания", count: 4, distance: 34 },
  ]);
  return (
    <div className="App">
      <Table sportData={sportData} />
    </div>
  );
}

export default App;
