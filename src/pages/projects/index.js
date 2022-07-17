import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../comps/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function index({ data }) {
  console.log(data)
  const  projects = data.allMarkdownRemark.nodes

  return (
      <Layout>
    <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites we've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
      </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  site {
    siteMetadata {
      contact
    }
  }
}


`