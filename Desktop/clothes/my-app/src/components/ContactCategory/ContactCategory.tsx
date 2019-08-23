import React from 'react'
import Styled from 'styled-components'


const ContactCategorySection = Styled.section`
background:#ebe7df;
`
const ContactCategoryWrapper = Styled.section`
width:80%;
margin:auto;
`
const Form = Styled.form`
display:flex;
flex-direction:column;
padding:20px 0;
`

const H2 = Styled.h2`
text-align:center;
padding:20px 0;
`
const ContactCategory: React.SFC = () => {

    return (
        <ContactCategorySection>
            <ContactCategoryWrapper>
                <H2>Contact</H2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus atque eius nesciunt vitae quas architecto a ut at neque eligendi impedit, magnam nisi sit ducimus nihil delectus cum dolorem minima inventore sed similique animi. Sequi, rerum ipsam! Commodi esse ratione eum dolores sint voluptatem totam eius doloribus officia praesentium?</p>

                <Form>
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" ></textarea>
                    <input type="button" value="Send" />
                </Form>
            </ContactCategoryWrapper>
        </ContactCategorySection>

    )
}

export default ContactCategory