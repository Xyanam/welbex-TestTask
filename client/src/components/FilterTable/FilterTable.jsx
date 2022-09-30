import React, { useState } from "react";

const FilterTable = ({ sortedData, setSortedData, resetFilter }) => {
  const [value, setValue] = useState("");
  const [selectedSortName, setSelectedSortName] = useState("");
  const [selectedOperations, setSelectedOperations] = useState("");
  const onClickFilteredTable = (e) => {
    e.preventDefault();

    if (selectedSortName === "name") {
      setSortedData(
        sortedData.filter((f) =>
          f[selectedSortName].toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      if (selectedOperations === "equally") {
        setSortedData(sortedData.filter((f) => f[selectedSortName] === +value));
      } else if (selectedOperations === "contains") {
        setSortedData(
          sortedData.filter(
            (f) => f[selectedSortName].toString().indexOf(value) > -1
          )
        );
      } else if (selectedOperations === "more") {
        setSortedData(sortedData.filter((f) => f[selectedSortName] > +value));
      } else if (selectedOperations === "less") {
        setSortedData(sortedData.filter((f) => f[selectedSortName] < +value));
      }
    }
  };
  return (
    <form>
      <select
        name=""
        id=""
        onChange={(e) => setSelectedSortName(e.target.value)}
      >
        <option value="">Колона:</option>
        <option value="name">Название</option>
        <option value="count">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <select
        name=""
        id=""
        onChange={(e) => setSelectedOperations(e.target.value)}
      >
        <option value="">Операция:</option>
        <option value="equally">Равно</option>
        <option value="contains">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClickFilteredTable}>Фильтровать</button>
      <button onClick={resetFilter}>Сброс</button>
    </form>
  );
};

export default FilterTable;
