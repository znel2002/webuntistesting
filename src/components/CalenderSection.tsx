import { BugIcon, InfoIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Calendar: React.FC = () => {
  // Sample calendar data

  const [data, setData] = useState<any[]>();
  const [grid, setGrid] = useState<any>();
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const fetchData = async () => {
    fetch("http://localhost:8080/grid")
      .then((response) => response.json())
      .then((json) => setGrid(json))
      .then(() => {
        console.log("grid", grid);
      })
      .catch((error) => console.error("ERROR", error));
    fetch("http://localhost:8080/timetable")
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((json) => setData(json))
      .then()
      .then(() => {
        console.log("data", data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-full w-full flex justify-center items-center px-2 bg-slate-100">
      {data && (
        <div className="w-full   overflow-hidden px-4 h-[90%]" id="tocenter">
          <div className="flex items-center px-4 py-2 bg-gray-200 shadow-md h-[6%] ">
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
          <div className="grid grid-cols-[0.25fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-1 px-4 py-4 text-sm mt-4 shadow-md bg-white rounded-b-lg h-[90%] auto-rows-max auto-cols-max">
            <div className="text-center font-medium h-5"></div>
            {weekdays.slice(0, data.length).map((weekday) => (
              <div key={weekday} className="text-center font-medium h-5">
                {weekday}
              </div>
            ))}
            {grid && (
              <div className="space-y-1 ">
                {grid[0].timeUnits.map((time: any) => (
                  <div>
                    <div className="flex h-16 p-1 justify-center items-center ">
                      <div className="text-gray-400">
                        {String(time.startTime).slice(
                          0,
                          String(time.startTime).length - 2
                        )}
                        :
                        {String(time.startTime).slice(
                          String(time.startTime).length - 2
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {data.map(
              (day, index) => (
                console.log("element", day, index),
                (
                  <div key={day.date} className="space-y-1">
                    {day.elements.map((element: any, index: Number) => {
                      return (
                        <>
                          <div>
                            {element.elements.length ? (
                              <div
                                key={element.id}
                                className="flex h-16 px-8 border flex-row  justify-between relative"
                              >
                                {element.hasPeriodText ? (
                                  // div with icon to symbolize that there is a period text in upper right corner of the element
                                  <div className="absolute top-0 right-0 mt-1 mr-1">
                                    <InfoIcon className="text-red-black w-4 h-4" />
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                                <div className="text-gray-600 flex flex-col justify-center items-center w-full">
                                  <p>
                                    {
                                      /* loop all classes and add a comma after each class */
                                      element.classes.map((element: any) => {
                                        return element.element.name + " ";
                                      })
                                    }
                                  </p>
                                  <p>
                                    {
                                      /* loop all classes and add a comma after each class */
                                      element.subjects.map((element: any) => {
                                        return element.element.name + " ";
                                      })
                                    }
                                  </p>
                                </div>
                                <div className="text-gray-600 flex flex-col justify-center items-center w-full">
                                  <p>
                                    {element.teachers.map((element: any) => {
                                      return element.element.name + " ";
                                    })}
                                  </p>
                                  <p>
                                    {element.rooms.map((element: any) => {
                                      return element.element.name + " ";
                                    })}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </div>
                )
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
