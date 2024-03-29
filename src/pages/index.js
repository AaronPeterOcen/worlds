import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../comps/Layout"
import *  as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({data}) {
  console.log(data)

  return (
  <Layout>
    <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </section>
  </Layout>
    
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`