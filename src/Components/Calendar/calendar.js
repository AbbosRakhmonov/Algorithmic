import React, { useState } from "react";
import { differenceInCalendarDays, compareAsc } from "date-fns";
import Calendar from "react-calendar";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./for_calendar.scss";

export default function CalendarComponent(props) {
  const [date, setDate] = useState(new Date());
  // const highlightedDates = [];
  const formatWeekdayShowTwoLetter = (date) => {
    const weekday = date.getDay();
    const weekdayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return weekdayNames[weekday];
  };
  const handleClickSelectedDay = (date) => {
    console.log(date.getDay(), date.getDate());
  };
  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  };
  const tileClassName = ({ date, view }) => {
    // if (
    //     view === 'month' &&
    //     highlightedDates.find((dDate) => isSameDay(dDate, date))
    // ) {
    //     return 'hasActiveContest';
    // }
  };
  return (
    <div data-aos={"zoom-in"}>
      <Calendar
        onChange={(date) => setDate(date)}
        value={date}
        tileClassName={tileClassName}
        formatShortWeekday={(locale, date) => formatWeekdayShowTwoLetter(date)}
        onClickDay={(value) => handleClickSelectedDay(value)}
        prevLabel={<IoChevronBack />}
        nextLabel={<IoChevronForward />}
      />
    </div>
  );
}
