import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { basic } from "../themeHandler";

const xdays = {
  monday: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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

function NewDaypartEditor({callback, initialSchedule = xdays }) {
  const [Schedule, setSchedule] = useState(initialSchedule);
  const [changed, setChanged] = useState(false);
  const [brush, setbrush] = useState("NONE");

  useEffect(() => {}, [changed]);
  const handleKeyDown = (event) => {
    if (event.key === "e") {
      setbrush(false);
    }
    if (event.key === "b") {
      setbrush(true);
    }

    setChanged(!changed);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    //eslint-disable-next-line
  }, []);

  const handleKeyUp = (event) => {
    console.log("up");
    setbrush("NONE");
    if (typeof callback == "function") {
      callback(Schedule);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
    //eslint-disable-next-line
  }, []);

  const drawTable = () => {
    return Object.keys(Schedule).map((weekday, i) => (
      <tr weekday={"tr-" + weekday} className="tableRow">
        <th
          weekday={"th-" + weekday}
          scope="row"
          className="weekdayLabel"
          onClick={() => toggleDay(weekday)}
        >
          {weekday.slice(0, 3)}
        </th>
        <br />

        {Schedule[weekday].map((value, hour) => (
          <td
            weekday={"td-" + weekday + ":" + hour}
            id={"cellvalue" + value}
            className={"hour" + hour}
            onMouseEnter={(e) => OnCursorInCell(weekday, hour, e)}
            onClick={(e) => handleClickCell(weekday, hour, value)}
          ></td>
        ))}
      </tr>
    ));
  };

  const handleClickCell = (weekday, hour, value) => {
    console.log(value);
    var toModify = Schedule;
    toModify[weekday][hour] = value ? 0 : 1;
    setSchedule(toModify);
    setChanged(!changed);
    if (typeof callback == "function") {
      callback(Schedule);
    }
  };

  const toggleDay = (weekday) => {
    var toModify = Schedule;

    var on = 0;
    for (var i in toModify[weekday]) {
      if (toModify[weekday][i]) {
        on++;
      } else {
        on--;
      }
    }
    console.log(on);
    for (var it in toModify[weekday]) {
      if (on > 0) {
        toModify[weekday][it] = 0;
      } else {
        toModify[weekday][it] = 1;
      }
    }

    setSchedule(toModify);
    setChanged(!changed);
    if (typeof callback == "function") {
      callback(Schedule);
    }
  };

  const toggleHour = (hour) => {
    var toModify = Schedule;

    var on = 0;
    Object.keys(toModify).forEach((weekday, i) => {
      if (toModify[weekday][hour] > 0) {
        on++;
      } else {
        on--;
      }
    });

    Object.keys(toModify).forEach((weekday, i) => {
      if (on >= 0) {
        toModify[weekday][hour] = 0;
      } else {
        toModify[weekday][hour] = 1;
      }
    });

    setSchedule(toModify);
    setChanged(!changed);
    if (typeof callback == "function") {
      callback(Schedule);
    }
  };

  const setAll = (value) => {
    var toModify = Schedule;
    Object.keys(toModify).forEach((weekday, i) => {
      toModify[weekday].forEach((hour, index) => {
        toModify[weekday][index] = value;
      });
    });
    setSchedule(toModify);
    setChanged(!changed);
    if (typeof callback == "function") {
      callback(Schedule);
    }
  };

  const OnCursorInCell = (weekday, hour, e) => {
    var toModify = Schedule;
    if (brush === false) {
      toModify[weekday][hour] = 0;
    } else if (brush === true) {
      toModify[weekday][hour] = 1;
    }
    setSchedule(toModify);
    setChanged(!changed);
  };

  const HandleCursorInGraph = () => {
    setbrush("NONE");
  };

  return (
    <NewDaypartEditorContainer
    className="DaypartEditorContainer"
        onMouseEnter={() => HandleCursorInGraph()}
        onMouseDown={""}
        onSelect={""}
      >
        <tr className="labelRow  tableRow">
          <th>Day\Hour</th>
          <br />
          {Schedule["monday"].map((hour, index) => (
            <>
              {index % 4 === 0 ? (
                
                <th className="labelColor" onClick={() => toggleHour(index)}>
                  {index}
                </th>
              ) : (
                <th onClick={() => toggleHour(index)}></th>
              )}
            </>
          ))}
        </tr>
        {drawTable()}
        <DaypartStatusContainer>
          <basic.BNrml type="button"onClick={()=> setAll(1) }> Fill all</basic.BNrml>
          <basic.BDscrd type="button" onClick={()=> setAll(0)} >Discard all</basic.BDscrd>
          <div className="statusbuttons">
          {
            brush === "NONE" ? <></> :
            <>
            {
              brush ? 
              <basic.BHghlght id="statusButton"  type="button"> brush </basic.BHghlght>
              :
              <basic.BDlt id="statusButton" type="button"> erase </basic.BDlt>
            }
            </>
          }
          </div>



        </DaypartStatusContainer>

        <div className="explanationtext">
          <li>click in a Cell to activate or deactivate</li>
          <li>click on days and hours to toggle entire rows or columns</li>
          <br />
            <li>
              press and hold <span>b</span> for brush and move mouse across
              table cells
            </li>
            <li>
              press and hold <span>e</span> for erase and move mouse across
              table cell
            </li>
        </div>
    </NewDaypartEditorContainer>
  );
}

export default NewDaypartEditor;

const NewDaypartEditorContainer = styled.div`

color: var(--backgroundTextColor);
  height: fit-content;
  width:100%;
  font-size: 14px;
  font-weight: inherit;
  
  margin: 10px 00px 10px 0px;

  .labelColor {
    border-left: 2px solid var(--seperatorColor);
    font-weight: inherit;
  }
  .labelRow {
    height: 25px;
    font-weight: inherit;
    width: 20px;
  }

  .hour0,
  .hour4,
  .hour8,
  .hour12,
  .hour16,
  .hour20 {
    border-left: 2px solid var(--seperatorColor);
  }

  th {
    border-left: 0.2px solid var(--seperatorColor);
    border-bottom: 2px solid var(--seperatorColor);

    text-align: center;

    :hover {
      background-color: var(--seperatorColor);
      cursor: pointer;
    }
  }
  .weekdayLabel {
    width: 40px;
    text-align: left;

    font-weight: inherit;
  }

  h4 {
    color: var(--highlightColor);
  }
  span {
    background-color: var(--containerLightColor);
    padding: 1px 5px 1px 5px;
    margin: 5px 0px 0px 0px;
    border: 2px solid var(--seperatorColor);
  }
  li {
    margin: 7px 0px 0px 0px;
  }

  .tableRow {
    border-bottom: 2px solid var(--seperatorColor);
  }

  td {
    height: 25px;
    width: 25px;

    border-left: 0.2px solid var(--seperatorColor);

    border-bottom: 2px solid var(--seperatorColor);
  }
  #cellvalue0 {
  }
  #cellvalue1 {
    background-color: var(--highlightColor);
  }

  .explanationtext{
    color: var(--backgroundTextColor);
  }
`;


const DaypartStatusContainer = styled.section`
    display: flex;
    margin-top: 10px;


    #statusButton{
      width: fit-content;
      height: 40px;
      min-height: 20px;
      border-radius: 5px;
    }
    div{
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
`