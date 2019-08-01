import React from 'react'
import BlogNews from './BlogNews/BlogNews'
import TextBox from './TextBox/TextBox'
import styled from 'styled-components'


interface Iprops {

}
interface IState {
    BlogNewsContent: Array<Object>,
    TextBoxContent: Array<Object>,
}
class AddonSection extends React.Component<Iprops, IState> {
    state = {
        TextBoxContent: [
            { titile: "Free Shipping", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae perferendis quo qui eum recusandae harum dignissimos eligendi aspernatur ipsam! Fugiat aut facere esse nobis illum labore nam suscipit placeat!", author: "" },
            { titile: "Free Shipping", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae perferendis quo qui eum recusandae harum dignissimos eligendi aspernatur ipsam! Fugiat aut facere esse nobis illum labore nam suscipit placeat!", author: "John Doe" }
        ],
        BlogNewsContent: [
            { title: "Nice & clean. The best for you blog!", content: " Amet consectetur adipisicing elit.Lorem ipsum dolor sit amet ", date: "1.4.2019" },
            { title: "What an Ecommerce theme!", content: " Amet consectetur adipisicing elit.Lorem ipsum dolor sit amet ", date: "4.2.2019" }
        ]
    }

    render() {
        const { BlogNewsContent, TextBoxContent } = this.state;
        const TextBoxs = TextBoxContent.map(item => <TextBox data={item} />)
        return (
            <section>
                {TextBoxs}
                <BlogNews data={BlogNewsContent} />

            </section>
        )
    }

}



export default AddonSection