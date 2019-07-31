import React from 'react'
import TextWidget from './TextWidget'
import TwitterWidget from './TwitterWidget'
import FlickerWidget from './FlickerWidget'

const Widgets: React.SFC = () => {
    return (
        <section>
            <TextWidget />
            <TwitterWidget />
            <FlickerWidget />
        </section >
    )
}

export default Widgets