import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
	return (
		<div>
			<Layout>
				<Head title="404"/>
				<h1>
					Page Not Found
				</h1>
				<p><Link to='/'>Head home</Link></p>
			</Layout>
		</div>
	)
}

export default NotFound