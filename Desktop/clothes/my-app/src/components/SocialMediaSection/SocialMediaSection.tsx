import React from 'react'
import SocialIcons from './SocialIcons'
import NewsletterForm from './NewsletterForm'
import Styled from 'styled-components'

const SectionWrapper = Styled.section`
    background-color:#242424;
    border-top:1px solid black;
    padding:20px;
`
const Section = Styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:space-around;
    width:90%;
    @media only screen and (min-width: 600px) {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:80%;
        margin:0 auto;
}
`

const SocialMediaSection: React.SFC = () => {
    return (
        <SectionWrapper>
            <Section>
                <NewsletterForm />
                <SocialIcons />
            </Section >
        </SectionWrapper>
    )
}

export default SocialMediaSection