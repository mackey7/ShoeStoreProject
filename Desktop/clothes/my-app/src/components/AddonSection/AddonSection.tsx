import React from 'react'
import BlogNews from './BlogNews/BlogNews'
import TextBox from './TextBox/TextBox'
import styled from 'styled-components'


interface Iprops {

}
interface IState {

}
class AddonSection extends React.Component<Iprops, IState> {

    render() {
        return (
            <section>
                <TextBox />
                <TextBox />
                <BlogNews />
            </section>
        )
    }

}



export default AddonSection