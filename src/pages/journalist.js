import React from 'react'
import { Link } from 'react-router-dom';
import { Phrase, Char } from "animatedtxt";
import Domingo from '../components/journalistWork/Domingo';

export const journalist = (toggle) => {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-red-300">
                <h1 className="tracking-widest text-9xl uppercase font-black">
                    <Phrase margin={20} size={100} duration={1}>
                        <Char char="J" />
                        <Char char="O" />
                        <Char char="U" />
                        <Char char="R" />
                        <Char char="N" />
                        <Char char="A" />
                        <Char char="L" />
                        <Char char="I" />
                        <Char char="S" />
                        <Char char="T" />
                    </Phrase>
                </h1>
            </div>
            <div className="pr-9 flex justify-around items-center bg-red-300">
                <Link className="nav-btn" to='/'>Home</Link>
                <Link className="nav-btn" to='/blog'>Blog</Link>
                <Link className="nav-btn" to='/about'>About</Link>
                <Link className="nav-btn" to='/journalist'>Journalist</Link>
                <Link className="nav-btn" to='/contact'>Contact</Link>
            </div>
            <Domingo />
        </>
    )
}
