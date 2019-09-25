import React from 'react'
import TextWidget from './TextWidget'
import TwitterWidget from './TwitterWidget'
import FlickerWidget from './FlickerWidget'
import Styled from 'styled-components'

const Section = Styled.section`
  background:#242424;
  color:#a4a4a4;
`
const WidgetsWrapper = Styled.div`
  width:90%;
  padding:20px;
  display:flex;
  flex-direction:column;


@media only screen and (min-width: 600px) {
    width:80%;
    margin:0 auto;
}
@media only screen and (min-width: 900px) {
    width:80%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    align-items:flax-start;
}

`

const Widgets: React.SFC = () => {
  return (
    <Section>
      <WidgetsWrapper>
        <TextWidget />
        <TwitterWidget />
        <FlickerWidget />
      </WidgetsWrapper>
    </Section >
  )
}

export default Widgets