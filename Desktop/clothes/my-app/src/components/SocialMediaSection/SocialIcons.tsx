import React from 'react'
import Styled from 'styled-components'

const Icon = Styled.i`
    margin-left:10px;
    background:#2e2e2e;
    color:#7d7d7d;
    padding:10px;
    cursor:pointer;
        &:hover{
            color:#fff;
        }
`
const Nav = Styled.nav`
    margin-top:20px;
        @media only screen and (min-width: 600px) {
            margin-top:0;
        }

ul{
    display:flex;
        li{
            list-style:none;
        }
    }

`

const SocialIcons: React.SFC = () => {
    return (
        <Nav>
            <ul>
                <li><a href="https://www.facebook.com"><Icon className="fab fa-facebook-f"></Icon>   </a></li>
                <li><a href="https://www.twitter.com"> <Icon className="fab fa-twitter"></Icon></a></li>
                <li><a href="https://www.linkedin.com"><Icon className="fab fa-flickr"></Icon></a></li>
                <li><a href="https://www.flickr.com"><Icon className="fab fa-linkedin-in"></Icon></a></li>
            </ul>
        </Nav>
    )
}

export default SocialIcons