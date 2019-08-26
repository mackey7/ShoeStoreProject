import React from 'react'
import Styled from 'styled-components'
import { Formik } from 'formik'


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
width:100%;
`
const ContactInput = Styled.input`
padding:20px;
margin:10px 0px;
border:2px solid #c5c9bd;
`
const ContactTextArea = Styled.textarea`
padding:20px;
margin:10px 0px;
border:2px solid #c5c9bd;
min-height:200px;

`
const ContactButton = Styled.input`
margin:10px 0px;
padding:20px;
font-size:30px;
background:#7db71e;
border:2px solid #c5c9bd;
cursor:pointer;
color:#fff;
font-weight:700;
&:hover{
    background:#08b438;
    border:2px solid #7db71e;
}
`
const H2 = Styled.h2`
text-align:center;
padding:20px 0;
font-size:40px;
`

interface FormValues {
    email: string,
    subject: string,
    content: string
}


const ContactCategory: React.SFC<{}> = () => {

    return (
        <ContactCategorySection>
            <ContactCategoryWrapper>
                <H2>Contact</H2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus atque eius nesciunt vitae quas architecto a ut at neque eligendi impedit, magnam nisi sit ducimus nihil delectus cum dolorem minima inventore sed similique animi. Sequi, rerum ipsam! Commodi esse ratione eum dolores sint voluptatem totam eius doloribus officia praesentium?</p>


                <Formik

                    initialValues={{ email: '', subject: "", content: "" }}
                    onSubmit={values => {
                        console.log(values);
                    }}

                    render={({
                        values,
                        errors,
                        handleChange,
                        handleSubmit
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <ContactInput placeholder="E-mail" type="text" name="email" onChange={handleChange} value={values.email} />
                                <ContactInput placeholder="Subject" type="text" name="subject" onChange={handleChange} value={values.subject} />
                                <ContactTextArea placeholder="Content..." name="content" onChange={handleChange} value={values.content} ></ContactTextArea>
                                <ContactButton type="submit" value="Send" />
                            </Form>
                        )
                    }
                />

            </ContactCategoryWrapper>
        </ContactCategorySection>

    )
}

export default ContactCategory