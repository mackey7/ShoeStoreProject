import React from 'react'
import Styled from 'styled-components'

const Form = Styled.form`
    input[type="text"]{
        border:0px;
        background:#2e2e2e;
        padding:10px;
        color:#7d7d7d;
    }
    input[type="button"]{
        border:0;
        padding:8px;
        background:#7d7d7d;
        color:#2e2e2e;
        font-size:13px;
        font-weight:900;
        cursor:pointer;
    }
`

const NewsletterForm: React.SFC = () => {
    return (
        <Form action="" method="post">
            <input type="text" placeholder="Enter email for newsletter" />
            <input type="button" value=">" />
        </Form>
    )
}

export default NewsletterForm