import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "./style.scss";
import ReactTooltip from "react-tooltip";

function Heatmap(props) {
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  const value = [
    { date: "2022/01/11", count: 2 },
    { date: "2022/01/12", count: 20 },
    { date: "2022/01/13", count: 10 },
  ];
  return (
    <div className={"user-activity-actions mt-5"}>
      <CalendarHeatmap
        gutterSize={3}
        startDate={shiftDate(new Date(), -150)}
        endDate={new Date()}
        values={value}
        showWeekdayLabels={true}
        horizontal={true}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date} has count: ${value.count}`,
          };
        }}
      />
      <ReactTooltip />
    </div>
  );
}

export default Heatmap;
