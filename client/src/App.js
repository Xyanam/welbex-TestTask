import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";

function App() {
  /*
      { id: 1, date: 2021, name: "Фитнес", count: 2, distance: 22 },
      { id: 2, date: 2021, name: "Фитнес", count: 2, distance: 22 },
      { id: 3, date: 2019, name: "Физ.Культура", count: 5, distance: 45 },
      { id: 4, date: 2018, name: "Атлетика", count: 3, distance: 66 },
      { id: 5, date: 2022, name: "Бег", count: 7, distance: 36 },
      { id: 6, date: 2023, name: "Прыжки", count: 1, distance: 21 },
      { id: 7, date: 2013, name: "Отжимания", count: 4, distance: 34 },

      У меня не получилось разобраться с сервером, к большому сожалению. Если данные не придут,
      то вставьте эти в sportData, чтобы проверить работоспособность фронта.
*/

  const [sportData, setSportData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios.get("http://localhost:3001/sport").then((response) => {
      setSportData(response.data);
      setLoader(false);
    });
  }, []);

  return (
    <div className="App">
      {loader ? <Loader /> : <Table sportData={sportData} />}
    </div>
  );
}

export default App;
