import React, { useState } from "react";
import FilterTable from "../FilterTable/FilterTable";
import classes from "./Table.module.css";

const Table = ({ sportData }) => {
  const [sortedData, setSortedData] = useState([...sportData]);
  const [isActive, setIsActive] = useState(false);

  const sortCount = () => {
    setIsActive(!isActive);
    setSortedData(
      sportData.sort((a, b) => {
        return isActive ? a.count - b.count : b.count - a.count;
      })
    );
  };
  const sortDistance = () => {
    setIsActive(!isActive);
    setSortedData(
      sportData.sort((a, b) => {
        return isActive ? a.distance - b.distance : b.distance - a.distance;
      })
    );
  };

  const sortName = () => {
    setIsActive(!isActive);
    setSortedData(
      sportData.sort((a, b) => {
        return isActive
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      })
    );
  };

  const resetFilter = (e) => {
    e.preventDefault();
    setSortedData([...sportData]);
  };

  return (
    <div>
      <FilterTable
        sortedData={sortedData}
        setSortedData={setSortedData}
        resetFilter={resetFilter}
      />
      <table className={classes.table} align="center" width={800} border="1">
        <thead>
          <tr>
            <th className={classes.title}>Дата</th>
            <th style={{ cursor: "pointer" }} onClick={sortName}>
              Название
            </th>
            <th style={{ cursor: "pointer" }} onClick={sortCount}>
              Количество
            </th>
            <th style={{ cursor: "pointer" }} onClick={sortDistance}>
              Расстояние
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((sport) => {
            return (
              <tr align="center" key={sport.id}>
                <td>{sport.date}</td>
                <td>{sport.name}</td>
                <td>{sport.count}</td>
                <td>{sport.distance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
