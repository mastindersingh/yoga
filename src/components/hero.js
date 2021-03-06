import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./hero.css"
import useInterval from "../lib/useInterval"
import BackgroundImage from "gatsby-background-image"
import ContentBox from "./content-box"
import NavigationData from "../data/navigation.json"

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                image0: file(
                    relativePath: { eq: "assets/hero/sre1.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image1: file(
                    relativePath: { eq: "assets/hero/sre2.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image2: file(
                    relativePath: { eq: "assets/hero/sre3.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1200, maxHeight: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    const images = [
        data.image0.childImageSharp.fluid,
        data.image1.childImageSharp.fluid,
        data.image2.childImageSharp.fluid,
    ]
    const [image, setImage] = useState(images[0])
    const [current, setCurrent] = useState(0)
    const [plantation, setPlantationTab] = useState(false)
    const [yoga, setYogaTab] = useState(false)
    const [pranic, setPranicTab] = useState(false)
    const [delay, setDelay] = useState(3000)

    const clickPlantation = () => {
        setPlantationTab(!plantation)
        setPranicTab(false)
        setYogaTab(false)
        determineDelay(!plantation)
    }

    const clickYoga = () => {
        setYogaTab(!yoga)
        setPranicTab(false)
        setPlantationTab(false)
        determineDelay(!yoga)
    }

    const clickPranic = () => {
        setPranicTab(!pranic)
        setPlantationTab(false)
        setYogaTab(false)
        determineDelay(!pranic)
    }

    const determineDelay = contentState => {
        contentState ? setDelay(null) : setDelay(3000)
    }

    useInterval(() => {
        if (current < images.length - 1) {
            setCurrent(current + 1)
            setImage(images[current + 1])
        } else {
            setCurrent(0)
            setImage(images[0])
        }
    }, delay)

    return (
        <div className="hero-section__image-container">
            <BackgroundImage
                className="hero-section__background-image"
                fluid={image}
            >
                <div className="hero-text">
                    <h1 className="hero-text__title">
                        {NavigationData.heroText.title}
                    </h1>
                    <h2 className="hero-text__sub-title">
                        {NavigationData.heroText.subTitle}
                    </h2>
                    <div className="hero-text__button-container">
                        <button
                            onClick={() => clickPlantation()}
                            className="hero-text__button"
                        >
                            {NavigationData.heroButtons.plantation.text}
                        </button>
                        <button
                            onClick={() => clickYoga()}
                            className="hero-text__button"
                        >
                            {NavigationData.heroButtons.yoga.text}
                        </button>
                        <button
                            onClick={() => clickPranic()}
                            className="hero-text__button"
                        >
                            {NavigationData.heroButtons.pranic.text}
                        </button>
                    </div>
                    {plantation && <ContentBox plantation="true" />}
                    {yoga && <ContentBox yoga="true" />}
                    {pranic && <ContentBox pranic="true" />}
                </div>
            </BackgroundImage>
        </div>
    )
}
