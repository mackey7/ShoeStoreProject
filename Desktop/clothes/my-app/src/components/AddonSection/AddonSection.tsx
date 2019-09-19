import React from 'react'
import BlogNews from './BlogNews/BlogNews'
import TextBox from './TextBox/TextBox'
import Styled from 'styled-components'
import uuid from 'uuid';

const SectionWrapper = Styled.section`
background:#ebe7df;
`;


const Section = Styled.section`
display:flex;
flex-direction:column;
width:90%;
margin:0 auto;
padding:30px 0;
border-top:1px solid black;
@media only screen and (min-width: 900px) {
    width:80%;
 display:flex;
 flex-direction:row;
 
}

`

interface IState {
    BlogNewsContent: Array<Object>,
    TextBoxContent: Array<Object>,
}
class AddonSection extends React.Component<{}, IState> {
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
        const TextBoxs = TextBoxContent.map(item => <TextBox key={uuid.v4()} data={item} />)
        return (
            <SectionWrapper>
                <Section>
                    {TextBoxs}
                    <BlogNews data={BlogNewsContent} />
                </Section>
            </SectionWrapper>
        )
    }

}



export default AddonSection