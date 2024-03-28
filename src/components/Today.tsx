import React from 'react';

const messages = [
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    },
    {
        title: "Test",
        content: "This is a test message"

    }
]

function Today() {
    return (
        <div className={"flex flex-col py-12 px-14 "}>
            {/*appear on one line */}
            <div className={""}>
                <h2 className={"font-bold text-2xl inline-block "}>Today <p
                    className={"text-gray-500 inline-block font-normal text-[18px]"}>{new Date().toLocaleDateString()}</p>
                </h2>
            </div>
            <div className={"mt-6  w-full border-s-gray-200 border-2 rounded-2xl p-4"}>
                <h3 className={"font-semibold text-xl"}>
                    Latest Update
                </h3>
                {/*
                    Latest update

                */}
                <div className={"mt-2"}>
                    <h2>Last Login : placeholder</h2>
                    <h2>Last Updated : placeholder</h2>
                </div>
            </div>
            <div className={"mt-6  w-full border-s-gray-200 border-2 rounded-2xl p-4"}>
                <h3 className={"font-semibold text-xl"}>
                    Messages
                </h3>
                {/*
                    Newest messages
                */}
                <div className={"mt-4 overflow-scroll max-h-96 overflow-x-hidden"}>
                    {
                        messages.map((message, index) => {
                            return (
                                <div key={index} className={"bg-gray-100 p-2 my-2 rounded-xl"}>
                                    <h4 className={"font-semibold"}>{message.title}</h4>
                                    <p>{message.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Today;
