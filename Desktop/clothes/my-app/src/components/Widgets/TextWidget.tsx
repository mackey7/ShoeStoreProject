import React from 'react'
import WidgetTitle from './WidgetTitle'
import Styled from 'styled-components'

const TextWidgetWrapper = Styled.section`
width:100%;
padding-bottom:20px;
@media only screen and (min-width: 900px) {
 width:33%;
}
`


const TextWidget: React.SFC = () => {
    return (
        <TextWidgetWrapper>
            <WidgetTitle title="text widget" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, illum porro! Esse inventore laboriosam ea rem pariatur quae, odit magni, quia asperiores iste minus aperiam atque nulla culpa repudiandae sint ipsum libero quod earum sed. Aspernatur quas sit facere placeat hic impedit dolorum, minus fuga maxime quisquam doloremque provident animi vitae harum aliquam autem delectus adipisci error sunt repudiandae ea. Cum, rem aut. Animi, necessitatibus. Architecto maiores alias autem ea voluptates corporis aperiam vel id obcaecati, laborum illo? Fugit corporis odit perspiciatis provident possimus omnis ad cupiditate aut! Temporibus quia necessitatibus animi odit excepturi illo molestias aperiam hic cumque rerum?</p>
        </TextWidgetWrapper >
    )
}

export default TextWidget