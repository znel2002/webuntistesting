import React, {useEffect} from 'react';
import Logo from "../logo.svg";
import {
    Home,
    PanelsTopLeft,
    Calendar,
    ApertureIcon, LogOut
} from "lucide-react";

const links = [
    {
        name: "Today",
        link: "/",
        icon: Home
    },
    {
        name: "Overview",
        link: "/overview",
        icon: PanelsTopLeft
    },
    {
        name:"Calendar",
        link: "/calendar",
        icon: Calendar
    }

]

function Navbar() {
    const [activeNavIndex, setActiveNavIndex] = React.useState(0);
    useEffect(() => {
        const path = window.location.pathname;
        const index = links.findIndex(link => link.link === path);
        setActiveNavIndex(index);
    }, []);
    return (
        <div className={"w-1/6 pt-5 flex flex-col px-5 border-r-2 h-screen"}>
            <div className={"flex justify-center items-center mx-3"}>

                <div className={"flex-col"}>
                    <p className={"text-2xl font-bold"}>TimeTable</p>
                <p className={""}>Dathe-Gymnasium</p>
                </div>
            </div>
            <div className={"mt-10 flex flex-col space-y-8 h-full"}>
                {
                    links.map((link, index) => {
                        return (
                            <a href={link.link} className={`flex items-center space-x-4 p-2 font-bold rounded-r-2xl ${ activeNavIndex === index ? "text-orange-500 border-l-2 border-orange-500" : "cursor-pointer"} hover:bg-orange-200 `}>
                                <link.icon/>
                                <p>{link.name}</p>
                            </a>
                        )
                    }
                    )
                }
            </div>
            <div className={"relative flex-col bottom-4 h-28 block w-full"}>
                <div
                    className={`flex items-center space-x-4 p-3 text-gray-600 `}>
                    <ApertureIcon/>

                    <div className={"flex-col"}>
                        <p className={"font-bold"}>TimeTable</p>
                        <p>{"Profile"}</p>
                    </div>

                </div>
                <div
                    className={`flex items-center space-x-4 p-3 py-0 text-gray-500 my-2`}>
                    <LogOut/>


                        <p className={""}>Log Out</p>

                </div>
            </div>
        </div>
    )
}

export default Navbar;