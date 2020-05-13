import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

const ContactDetails = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact"/>
                <h2>Contact Details</h2>
                <p>
                    If you do want to learn more about me or connect, here's some contact details
                </p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/benny-chun/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="hhttps://github.com/BennyChun">GitHub</a>
                    </li>
                    <li>
                        <p>Phone number: err... probably not wise to put that here</p>
                    </li>
                </ul>
            </Layout>
        </div>
    )
}

export default ContactDetails;