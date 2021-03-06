import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid';

const UL = styled.ul`
    display:flex;
    text-decoration: none;
    flex-direction:column;
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
    @media only screen and (min-width: 900px) {
    display:flex;
    flex-direction:row;
}
`
const LINK = styled(Link)`
    color:#000;
    text-decoration: none;
`
const LI = styled.li`
    list-style:none;
    text-decoration: none;
    font-size:20px;
    padding:10px;
&:hover{
    background:#62c9a6
}
@media only screen and (min-width: 900px) {
    padding:10px 15px;
    border-left:2px solid #dedede;
&:nth-last-child(1){
    border-right:2px solid #dedede;
}
&:hover{
<<<<<<< HEAD
    background:#ebe7df;
}
&:active{
     background:#ebe7df;
}
=======
    background:#ebe7df
}
}

>>>>>>> secondMenu
`


interface IState {
    menu: Array<string>
}
class MenuListItem extends React.Component<{}, IState> {
    readonly state = {
        menu: ["Home", "Products", "About", "Pages", "Blog", "Contact"]
    };

    render() {
        return (
            <UL>
                {this.state.menu.map(x => <LI key={uuid.v4()}><LINK to={`/${x}`}>{x}</LINK></LI>)}

            </UL>
        )
    }

}



export default MenuListItem