import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Home"/>
                <h1>My Name is Benny</h1>
                <h2>This is my first Gatsby app </h2>
                <p>go to google here => <a href='https://www.google.com' target='_blank'>GOOGLE</a></p>
            </Layout>
        </div>
    );

}

export default IndexPage;
