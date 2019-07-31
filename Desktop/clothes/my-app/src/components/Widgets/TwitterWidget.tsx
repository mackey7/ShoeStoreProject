import React from 'react'
import WidgetTitle from './WidgetTitle'

const TwitterWidget: React.SFC = () => {
    return (
        <section>
            <WidgetTitle title="twitter widget" />
            <section>
                <p>
                    <span>@ericfustero</span>
                    Why thank you. Your work looks awasome by the way!
                </p>
                <span> 19 days ago</span>
            </section>
            <section>
                <p>
                    <span>@roymarvelous</span>
                    You can seek a refund through. TF if is it not as advertised - but it is :)
                </p>
                <span> 21 days ago</span>
            </section>
        </section >
    )
}

export default TwitterWidget