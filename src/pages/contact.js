import React from 'react'
import { Phrase, Char } from "animatedtxt";

const contact = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-blue-300">
            <h1 className="tracking-widest text-9xl uppercase font-black">
            <Phrase margin={20} size={100} duration={1}>
                <Char char="C" />
                <Char char="O" />
                <Char char="N" />
                <Char char="T" />
                <Char char="A" />
                <Char char="C" />
                <Char char="T" />
            </Phrase>
            </h1>
        </div>
    )
}

export default contact
