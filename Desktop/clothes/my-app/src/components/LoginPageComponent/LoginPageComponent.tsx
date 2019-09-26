import React from 'react'
import Styled from 'styled-components'
import { Formik } from 'formik'
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";

const LoginPagesection = Styled.section`
    background:#ebe7df;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoginPageWrapper = Styled.section`
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
     min-width:100%;
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


const LoginPageComponent: React.SFC = () => {

    return (
        <LoginPagesection>
            <LoginPageWrapper>
                <H2>Login</H2>
                <Formik

                    initialValues={{ login: '', password: "" }}
                    onSubmit={values => {
                        console.log(values);
                    }}

                    render={({
                        values,
                        errors,
                        handleChange,
                        handleSubmit
                    }) => (
                            <Animated animationIn="zoomInLeft" animationOut="swing" isVisible={true} animationInDuration={1500} animationOutDuration={0} >
                                <Form onSubmit={handleSubmit}>
                                    <Input placeholder="login" type="text" name="login" onChange={handleChange} value={values.login} />
                                    <Input placeholder="password" type="password" name="password" onChange={handleChange} value={values.password} />
                                    <Button type="submit" value="Login" />
                                </Form>
                            </Animated>
                        )
                    }
                />
            </LoginPageWrapper>
        </LoginPagesection>
    )
}

export default LoginPageComponent