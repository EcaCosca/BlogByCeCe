import React from 'react'
import { Phrase, Char } from "animatedtxt";


const menu = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-green-300">
            <h1 className=" tracking-widest text-9xl uppercase font-black">
                <Phrase margin={20} size={200} duration={1}>
                    <Char char="M" />
                    <Char char="E" />
                    <Char char="N" />
                    <Char char="U" />
                </Phrase>
            </h1>
        </div>
    )
}

export default menu
