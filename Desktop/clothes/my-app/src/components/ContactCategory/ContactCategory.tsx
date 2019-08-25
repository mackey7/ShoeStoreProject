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

width:700px;

input, textarea{
    margin:20px;
    width:100%;
}

`

const H2 = Styled.h2`
text-align:center;
padding:20px 0;
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
                                <input type="text" name="email" onChange={handleChange} value={values.email} />
                                <input type="text" name="subject" onChange={handleChange} value={values.subject} />
                                <textarea name="content" onChange={handleChange} value={values.content} ></textarea>
                                <input type="submit" value="Send" />
                            </Form>
                        )

                    }
                />

            </ContactCategoryWrapper>
        </ContactCategorySection>

    )
}

export default ContactCategory