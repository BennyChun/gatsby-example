import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Home"/>
                <h1>Welcome!</h1>
                <h2>What's this about?</h2>
                <p>
                    As I explore the various static web generators out there, this website is one of the examples of
                    me exploring the basics of such technologies so that I can find a suitable one that I will develop my own
                    personal website on.
                </p>
                <p>
                    There isn't much on this website, except for me playing around with some of Gatsby's features such as
                </p>
                <ul>
                    <li>
                        Exploring how page routing works
                    </li>
                    <li>
                        Exploring how to dynamically render pages
                    </li>
                    <li>
                        Integrate Gatsby with a CMS
                    </li>
                </ul>

                <p>So that's about it, you might want to consider exploring the link below :)</p>
                <p><a href='https://www.google.com' target='_blank'>Infinite Knowledge</a></p>
            </Layout>
        </div>
    );

}

export default IndexPage;
