import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

const AboutMe = () => {
    return (
        <div>
            <Layout>
                <Head title="About Me"/>
                <h1>This is my about page</h1>
                <p>Im trying to learn gatsby</p>
            </Layout>
        </div>
    )
}

export default AboutMe;