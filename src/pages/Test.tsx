import React from "react";

function Test() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-lg shadow">
      {/* Month and year display */}
      <div className="calendar-header p-4 border-b border-gray-300 flex justify-between items-center">
        <h2>April 2024</h2>
        {/* Add button for next/prev month */}
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="calendar-weekdays grid grid-cols-7 p-1 text-xs font-bold text-gray-500 bg-gray-100">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>

      {/* Days */}
      <div className="calendar-days grid grid-cols-7 p-2">
        {/* Each day will be a cell */}
        <div className="calendar-day border border-gray-300 rounded px-2 py-3 hover:bg-gray-300">
          <span>15</span>
          <span>15</span>
        </div>
        <div className="calendar-day border border-gray-300 rounded px-2 py-3 hover:bg-gray-300">
          <span>15</span>
          <span>15</span>
        </div>
        {/* ... more days ... */}
      </div>
    </div>
  );
}

interface Day {
  date: string;
  weekdays: string[];
  times: string[];
  events: string[];
}

function Text() {
  const days: Day[] = [
    {
      date: "Mon. 15.04",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "Su"],
      times: [
        "9a",
        "06:45",
        "09:50",
        "10:35",
        "11,50",
        "12-35",
        "13:45",
        "14:30",
        "15:25",
      ],
      events: ["", "Hor", "Du", "Du", "ERTO", "96", "", "", ""],
    },
    {
      date: "Tue. 16.04",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "Su"],
      times: [
        "9a",
        "06:45",
        "09:50",
        "10:35",
        "11,50",
        "12-35",
        "13:45",
        "14:30",
        "15:25",
      ],
      events: ["Meeting", "", "Lunch", "", "Call", "", "Review", "", ""],
    },
    {
      date: "Wed. 17.04",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "Su"],
      times: [
        "9a",
        "06:45",
        "09:50",
        "10:35",
        "11,50",
        "12-35",
        "13:45",
        "14:30",
        "15:25",
      ],
      events: [
        "",
        "Presentation",
        "",
        "Brainstorming",
        "",
        "",
        "Project Update",
        "",
        "",
      ],
    },
    {
      date: "Thu. 18.04",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "Su"],
      times: [
        "9a",
        "06:45",
        "09:50",
        "10:35",
        "11,50",
        "12-35",
        "13:45",
        "14:30",
        "15:25",
      ],
      events: ["", "", "Workshop", "", "", "", "", "", "Deadline"],
    },
    {
      date: "Fri. 19.04",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "Su"],
      times: ["9a", "06:45", "09:50", "10:35", "11,50", "12-35"],
      events: ["", "", "", "", "Team Lunch", "", "", "", ""],
    },
  ];
  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-gray-200">
        <h1 className="text-xl font-medium mr-2">Date</h1>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
            Previous
          </button>
          <span>Today, 2024-04-16</span>
          <button className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 px-4 py-2 text-sm">
        {days[0].weekdays.map((weekday) => (
          <div key={weekday} className="text-center font-medium">
            {weekday}
          </div>
        ))}
        {days.map((day) => (
          <div key={day.date}>
            {day.times.map((time) => (
              <div
                key={time}
                className="grid grid-rows-2 p-1 border rounded-md"
              >
                <div className="text-gray-600">{time}</div>
                <div>{day.events[day.times.indexOf(time)]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Text;
