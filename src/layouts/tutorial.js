import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import style from './tutorial.module.styl'


const Tutorial = ({ data }) => {
    return (
        <div className={style.md}>
            <MDXRenderer
                components={{
                }}>
                {data.mdx.body}
            </MDXRenderer>
        </div>
    )
}


export default Tutorial

export const pageQuery = graphql`
    query Query($id: String) {
        mdx(id: { eq: $id }) {
            body
        }
    }
`
