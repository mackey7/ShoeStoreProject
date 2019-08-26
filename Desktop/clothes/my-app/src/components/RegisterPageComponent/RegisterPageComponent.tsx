import React from 'react'
import Styled from 'styled-components'
import { Formik } from 'formik'

const RegisterPageSection = Styled.section`
background:#ebe7df;
width:100%;
height:100%;
display: flex;
  align-items: center;
  justify-content: center;
`
const RegisterPageWrapper = Styled.section`
width:300px;
border:2px solid #9a9a9a;
padding:20px;
margin:100px 40px;
background:#f6f4f1;
`
const H2 = Styled.h2`
text-align:center;
font-size:35px;
padding-bottom:20px;
font-weight:600;

`

const Form = Styled.form`
display:flex;
flex-direction:column;
`
const Input = Styled.input`
padding:10px;
margin:5px 0px;
`
const Button = Styled.input`
margin-top:5px ;
padding:10px;




font-size:20px;
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


const RegisterPageComponent: React.SFC = () => {

    return (
        <RegisterPageSection>
            <RegisterPageWrapper>
                <H2>Register</H2>
                <Formik

                    initialValues={{ name: '', surname: "", email: "", login: "", password: "", retypePassword: "" }}
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
                                <Input placeholder="Name" type="text" name="name" onChange={handleChange} value={values.name} />
                                <Input placeholder="Surname" type="text" name="surname" onChange={handleChange} value={values.surname} />
                                <Input placeholder="Email" type="text" name="email" onChange={handleChange} value={values.email} />
                                <Input placeholder="Login" type="text" name="login" onChange={handleChange} value={values.login} />
                                <Input placeholder="Password" type="password" name="password" onChange={handleChange} value={values.password} />
                                <Input placeholder="Retype password" type="password" name="retypePassword" onChange={handleChange} value={values.retypePassword} />
                                <Button type="submit" value="Register" />
                            </Form>
                        )
                    }
                />
            </RegisterPageWrapper>
        </RegisterPageSection>
    )
}

export default RegisterPageComponent