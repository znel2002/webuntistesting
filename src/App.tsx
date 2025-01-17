import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WebUntis } from "webuntis";
import Navbar from "./components/Navbar";
import Today from "./components/Today";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Test from "./pages/Test";
function App() {
  //     const groupBy = (xs:any, key:any) => xs.reduce((rv:any, x:any) => {
  //         (rv[x[key]] = rv[x[key]] || []).push(x);
  //         return rv;
  //     }, {});
  //     const [data, setData] = useState<any[]>();
  //     const [grid, setGrid] = useState<any>();
  //     const objectToMap = (obj: Map<any, any> | { [s: string]: unknown; } | ArrayLike<unknown>) => new Map(Object.entries(obj));
  //     useEffect(() => {
  //         fetch("http://localhost:8080/grid").then(response => response.json()).then(json => setGrid(json)).then(() => {
  //         }).catch(error => console.error("ERROR",error));
  //         fetch('http://localhost:8080/test').then(response => {
  //
  //             return response
  //         }).then(response => response.json())
  //             .then(json => setData((json))).then(
  //         ).then(() => {
  //             console.log("data",data)
  //         })
  //             .catch(error => console.error(error));
  //
  //     }, []);
  //     function formatDate(date:Date) {
  //         // Get year, month, and day from the Date object
  //         const year = date.getFullYear();
  //         // Add 1 to month because January is 0
  //         const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //         const day = date.getDate().toString().padStart(2, '0');
  //
  //         // Concatenate the parts to form the desired format
  //         return `${year}${month}${day}`;
  //     }
  //
  // // Example usage:
  //     const currentDate = new Date();
  //     const formattedDate = formatDate(currentDate);
  //     console.log(formattedDate); // Output: 20240318 (for example, if current date is March 18, 2024)
  //     function getDaysOfCurrentWeek() {
  //         const today = new Date();
  //         const currentDay = today.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
  //         const firstDayOfWeek = new Date(today);
  //         firstDayOfWeek.setDate(today.getDate() - currentDay-7); // Set to first day of the week (Sunday)
  //
  //         const days = [];
  //         for (let i = 0; i < 7; i++) {
  //             const currentDate = new Date(firstDayOfWeek);
  //             currentDate.setDate(firstDayOfWeek.getDate() + i);
  //             const year = currentDate.getFullYear();
  //             const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  //             const day = (currentDate.getDate()+1).toString().padStart(2, '0');
  //             const formattedDate = `${year}${month}${day}`;
  //             days.push(formattedDate);
  //         }
  //
  //         return days;
  //
  //     }
  //     function searchObjectsWithValue(list: any[] | undefined, key: keyof any, value: any): any {
  //         // Iterate through the list
  //         const foundObjects: any[] = [];
  //         // Iterate through the list
  //         for (const obj of list? list : []) {
  //             console.log(obj)
  //             // Check if the object has the specified value for the specified key
  //             if (obj[key] == value) {
  //                 // Add the object to the array of found objects
  //                 foundObjects.push(obj);
  //             }
  //         }
  //         // Return the array of found objects
  //         if(foundObjects.length === 0) return undefined
  //         return foundObjects;
  //     }
  //
  // // Example usage:
  //     const daysOfCurrentWeek = getDaysOfCurrentWeek();

  return (
    // flex justify-center items-center min-h-screen
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
    // <div className="w-full flex" >
    //     <Navbar/>
    //     <main className={"grow"}>
    //         <Today/>
    //     </main>
    // </div>
  );
}

/*Object.values(data).map(
(item: any) => <div key={item.id} className={"m-3 p-3 flex-col bg-red-500"}>
    {item.map((subItem:any) => {
        return <div>{subItem.studentGroup}</div>
    })}
</div>*/
/* (daysOfCurrentWeek.map(

                (item: any) => <div key={item} className={"m-3 p-3 flex-col bg-red-500"}>
                    {data.get(item).map((subItem:any) => {
                        return <div>{subItem.studentGroup}</div>
                    })}
                </div>
                )*/
export default App;
