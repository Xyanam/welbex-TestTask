import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";

function App() {
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
