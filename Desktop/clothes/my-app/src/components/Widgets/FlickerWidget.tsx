import React from 'react'
import WidgetTitle from './WidgetTitle'
import WidgetImage from './WidgetImage'
import Styled from 'styled-components'
import uuid from 'uuid';

const FlickerWidgetWrapper = Styled.section`
    width:100%;
    padding-bottom:20px;
    @media only screen and (min-width: 900px) {
        width:33%;
    }
`
const Images = Styled.section`
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-content:center;
    @media only screen and (min-width: 900px) {
        display:flex;
        justify-content:flex-start;
    }
`

interface IState {
    ImageLink: Array<Object>;
}
class FlickerWidget extends React.Component<{}, IState> {
    state = {
        ImageLink: [
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" },
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" },
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" },
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" },
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" },
            { src: 'http://scifiaddicts.com/wp-content/uploads/2016/11/Image-Comics-Tokyo-Ghost-cover-art.jpg', alt: "alt" }
        ]


    }
    render() {
        const { ImageLink } = this.state
        return (
            <FlickerWidgetWrapper>
                <WidgetTitle title="flickr widget" />
                <Images>
                    {ImageLink.map(item => <WidgetImage key={uuid.v4()} src={item.src} alt={item.alt} />)}
                </Images>
            </FlickerWidgetWrapper >
        )
    }

}
export default FlickerWidget