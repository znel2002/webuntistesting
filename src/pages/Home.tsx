
import React from "react";
import Navbar from "../components/Navbar";
import Today from "../components/Today";

const Home = () => {
    return (
        <div className="w-full flex">
            <Navbar/>
            <main className={"grow"}>
                <Today/>
            </main>
        </div>
    );
};

export default Home;