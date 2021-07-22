import React from 'react'
import Hero from '../components/Hero'
import { Content } from '../components/Content'
import NoteList from '../components/NoteList'
import CreateUser from '../components/CreateUser'
import CreateNote from '../components/CreateNote'

const Home = () => {
    return (
        <>
            <Hero />
            <Content />
            <NoteList />
            <CreateUser />
            <CreateNote />   
        </>
    )
}

export default Home
