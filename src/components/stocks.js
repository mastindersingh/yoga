import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import './stocks.css'


export default () => {
    const data = useStaticQuery(
        graphql`
        {        
            markdownRemark(frontmatter: {id: {eq: "stock"}}) {
                html
            }
        }`
    );
    const content = data.markdownRemark.html;
    return (
        <React.Fragment>
            {content.length > 0 &&
            <div className="news__container" dangerouslySetInnerHTML={{ __html: content }}></div>
            }
        </React.Fragment>
    )
}
