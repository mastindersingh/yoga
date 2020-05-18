import React from "react"
import Layout from "../components/layout"
import ContactData from "../data/contact-x-berg.json"
import { graphql } from "gatsby"
import "./schedule.css"

export default ({ data }) => {
    const content = data.markdownRemark.html
    const title = data.markdownRemark.frontmatter.title
    return (
        <Layout>
            <React.Fragment>
                {/* <h1 className="schedule__title">{title}</h1>
                <div className="schedule__address-container">
                    <p>{ContactData.address.street}</p>
                    <p>
                        {ContactData.address.zip} {ContactData.address.city}
                    </p>
                </div> */}
                <a
                    className="schedule__link-to-sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/spreadsheets/d/107oL25dJy_6DjVotOamVlZfpuh5hnpOyJP4bfJiEqjo/edit#gid=186001220"
                >
                    Link to schedule
                </a>
                <iframe
                    title="schedule-sheet"
                    className="schedule__timetable-sheet"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQyKppL0SI6Tgh1iNxdBjhlMpCk6xXaWZaIZTNVASQIpBs2S_zjUnE03Sbpj0lVEM9HQiR1AGo3qFPc/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                    
                    
                    
                ></iframe>
                <div
                    className="schedule__classes-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </React.Fragment>
        </Layout>
        
    )
}

export const query = graphql`
    query {
        markdownRemark(frontmatter: { id: { eq: "schedule-x-berg" } }) {
            frontmatter {
                title
            }
            html
        }
    }
`
