import React from 'react'
import WidgetTitle from './WidgetTitle'
import WidgetImage from './WidgetImage'


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
            <section>
                <WidgetTitle title="flickr widget" />
                <section>
                    {ImageLink.map(item => <WidgetImage src={item.src} alt={item.alt} height={'100'} width={'100'} />)}

                </section>
            </section >
        )
    }

}
export default FlickerWidget