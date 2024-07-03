import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CalenderSection from "../components/CalenderSection";

function parsePeriodObject(str: string) {
  // Remove unnecessary text and convert single quotes to double quotes
  const jsonStr = str
    .replace(/{PeriodObject\(|\)}/g, "") // Remove "PeriodObject()" and parentheses
    .replace(/'/g, '"') // Convert single quotes to double quotes
    .replace(/set\(|\)/g, ""); // Remove "PeriodObject()" and parentheses
  console.log("jsonStr", jsonStr);
  try {
    // Parse the JSON string
    const parsedObject = JSON.parse(jsonStr);
    return parsedObject;
  } catch (error) {
    console.error("Error parsing string:", error);
    return null;
  }
}
function Calendar() {
  return (
    <div className="w-full flex">
      <Navbar />
      <main className={"grow "}>
        <CalenderSection />
      </main>
    </div>
  );
}

export default Calendar;
