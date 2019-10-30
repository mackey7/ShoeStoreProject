import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const UserWrapper = styled.section`
box-sizing:border-box;
min-width:300px;
height:400px;
width:20%;
border:1px solid black;
margin:20px;
padding:20px;
box-sizing:border-box;
border:2px solid black;
display:flex;
flex-direction:column;
justify-content:space-between;
`


const Name = styled.p`
font-weight:700;`


const P = styled.p`
display: inline-flex;
margin: 0;
padding: 0;
`
const DetailsLink = styled(Link)`
color:black;
font-weight:400;
font-size:24px;
text-decoration:none;
border:2px solid black;
padding:20px 20px;
-webkit-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
-moz-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
display:flex;
justify-content:center;
&:hover{
    background:#dddada;
  
}

`
interface IProps {
    name: string;
    email: string;
    phone: string;
    webiste: string;
    companyName: String;
    companyCatchPhrase: string;
    companyBs: string;
    keyId: number;
    id: number;
}

const PersonCardItemComponent: React.FC<IProps> = ({ id, keyId, name, email, phone, webiste, companyName, companyCatchPhrase }) => {
    return (
        <UserWrapper key={keyId} >
            <Name>{name}</Name>
            <div>
                <a href="mailto:adres@email"> {email}</a><br></br>
                <a href={'tel:'}>{phone}</a><br></br>
                <a href="www.site.com">{webiste}</a><br></br>
            </div>
            <div>
                <P>{companyName}</P><br></br>
                <P>companyCatchPhrase</P><br></br>
                <P>{companyCatchPhrase}</P><br></br>
            </div>


            <DetailsLink to={`/user/${id}`}>Details</DetailsLink>
        </UserWrapper >
    );
}

export default PersonCardItemComponent;
