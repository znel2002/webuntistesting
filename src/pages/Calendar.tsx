import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";

function Calendar() {
    const [data, setData] = useState<any[]>();
    const [grid, setGrid] = useState<any>();
    useEffect(() => {
        fetch("http://localhost:8080/grid").then(response => response.json()).then(json => setGrid(json)).then(() => {
        }).catch(error => console.error("ERROR",error));
        fetch('http://localhost:8080/test').then(response => {

            return response
        }).then(response => response.json())
            .then(json => setData((json))).then(
        ).then(() => {
            console.log("data",data)
        })
            .catch(error => console.error(error));

    }, []);
    return (
        <div className="w-full flex">
            <Navbar/>
            <main className={"grow"}>

            </main>
        </div>
    );
}

export default Calendar;