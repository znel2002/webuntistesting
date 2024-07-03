import React from "react";
import Navbar from "../components/Navbar";
import Today from "../components/Today";

function Overview() {
  return (
    <div className="w-full flex">
      <Navbar />
      <main className={"grow"}>
        {/*Centerd div*/}
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl font-bold">Overview</h1>
        </div>
      </main>
    </div>
  );
}

export default Overview;
