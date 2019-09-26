import React from 'react'
import styled from 'styled-components'
import Search from './Serach'
import LogSection from './LogSection'

const Section = styled.section`
    display:flex;
   
  
`



const RightPartMenu: React.SFC = () => {
    return (
        <Section>
            <Search />
            <LogSection />
        </Section >
    )
}

export default RightPartMenu