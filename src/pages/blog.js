import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

     const data = useStaticQuery(graphql`
        query {
              allContentfulBlogPost (
                    sort: {
                        fields: date,
                        order: DESC
                    }
                
              ) {
                    edges {
                        node {
                            title
                            date(formatString:"MMMM Do, YYYY")
                            slug
                        }
                    }
              }
        }
  `)

    return (
        <div>
            <Head title="Blog"/>
            <Layout>
                <h2>Blog</h2>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    );
}

export default BlogPage;