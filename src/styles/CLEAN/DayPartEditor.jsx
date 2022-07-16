import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { basic } from "../themeHandler";

const xdays = {
  monday: [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  tuesday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  wednesday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  thursday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  friday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  saturday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  sunday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
};

function DayPartEditor(callback) {
  const [Schedule, setSchedule] = useState(xdays);
  const [changed, setChanged] = useState(false);
  const [brush, setbrush] = useState("");

  useEffect(() => {
    console.log("DayPartEditor updated");
    if (typeof callback == "function") {
      callback(Schedule);
    } else {
      console.log("DayPartEditor callback is not connected");
    }
  }, [changed]);

  const drawWeekTable = () => {
    return 
    <div className="DaypartWeekLabel">
    
   { Object.keys(Schedule).map((weekday, i) => (
      <tr weekday={"tr-" + weekday} className="tableRow">
        <th weekday={"th-" + weekday} scope="row" className="weekdayLabel">
          <button>{weekday}</button>
        </th>
        <br />
        {Schedule[weekday].map((value, hour) => (
          <td
            weekday={"td-" + weekday + ":" + hour}
            scope="row"
            id={"cellvalue" + value}
            className={"hour" + hour}
            onMouseEnter={(e) => OnCursorInCell(weekday, hour, e)}
            onMouseDown={(e) => MouseDownHandler(weekday, hour, value)}
            onMouseUp={(e) => MouseUpHandler(weekday, hour, value)}
          ></td>
        ))}
      </tr>
    ))}

    </div>
  };

 
  

  const drawTable = () => {
    return Object.keys(Schedule).map((weekday, i) => (
      <tr weekday={"tr-" + weekday} className="tableRow">
        <th weekday={"th-" + weekday} scope="row" className="weekdayLabel">
          {weekday}
        </th>
      <br />
     
        {Schedule[weekday].map((value, hour) => (
          <td
            weekday={"td-" + weekday + ":" + hour}
            scope="row"
            id={"cellvalue" + value}
            className={"hour" + hour}
            onMouseEnter={(e) => OnCursorInCell(weekday, hour, e)}
            onMouseDown={(e) => MouseDownHandler(weekday, hour, value)}
            onMouseUp={(e) => MouseUpHandler(weekday, hour, value)}
          ></td>
        ))}
      </tr>
    ));
  };

  const MouseDownHandler = (weekday, hour, value) => {
    setbrush(!value);
    var toModify = Schedule;
    toModify[weekday][hour] = value? 0: 1;
    setSchedule(toModify);
    setChanged(!changed);
    setChanged(!changed);
    console.log(brush);
  };

  

  const MouseUpHandler = (weekday, hour, value) => {
    setbrush("NONE");

    setChanged(!changed);
    console.log(brush);
  };

  const OnCursorInCell = (weekday, hour, e) => {
    if (brush == false) {
      var toModify = Schedule;
      toModify[weekday][hour] = 0;
      setSchedule(toModify);
      setChanged(!changed);
    } else if (brush == true) {
      var toModify = Schedule;
      toModify[weekday][hour] = 1;
      setSchedule(toModify);
      setChanged(!changed);
    }
  };

  const HandleCursorInGraph = () => {
    setbrush("NONE");
  };



  return (
    <DayPartEditorContainer>
      <div className="innerDaypartEditor" onMouseEnter={() => HandleCursorInGraph()}>
        
      <div className="unselectable" >
        <tr className="labelRow  tableRow">
          
          <th>Day</th>
          <br/>
          <th className="labelColor"> 0</th>
          <th></th>
          <th></th>
          <th></th>
          <th className="labelColor"> 4</th>
          <th></th>
          <th></th>
          <th></th>
          <th className="labelColor"> 8</th>
          <th></th>
          <th></th>
          <th></th>
          <th className="labelColor">12</th>
          <th></th>
          <th></th>
          <th></th>
          <th className="labelColor">16</th>
          <th></th>
          <th></th>
          <th></th>
          <th className="labelColor">20</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </div>
        {drawTable()}
      </div>
    </DayPartEditorContainer>
  );
}

export default DayPartEditor;

const DayPartEditorContainer = styled.div`
  border-radius: 10px;
  border: 2px solid var(--seperatorColor);
  height: 400px;
  width: 400px;
  font-size: 10px;
  font-weight: inherit;
  .innerDaypartEditor {
    height: fit-content;
    width: fit-content;

    margin: 10px 10px 10px 10px;
  }

  .labelColor {
    border-left: 2px solid var(--seperatorColor);

    font-weight: inherit;
  }
  .labelRow {
    height: 25px;
    font-weight: inherit;
  }

  

  .hour0,
  .hour4,
  .hour8,
  .hour12,
  .hour16,
  .hour20 {
    border-left: 2px solid var(--seperatorColor);
  }
  .weekdayLabel {
    width: 70px;
    text-align: left;

    font-weight: inherit;
  }

  .tableRow {
    border-bottom: 2px solid var(--seperatorColor);
  }

  td {
    height: 20px;
    width: 15px;
  }
  #cellvalue0 {
  }
  #cellvalue1 {
    background-color: var(--highlightColor);
  }
`;
