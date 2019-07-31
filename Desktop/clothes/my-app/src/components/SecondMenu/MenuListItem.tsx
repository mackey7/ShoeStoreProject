import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UL = styled.ul`

display:flex;
text-decoration: none;
height:100%;

`
const LINK = styled(Link)`
color:#000;
text-decoration: none;
`
const LI = styled.li`
list-style:none;
padding:10px 15px;
text-decoration: none;
font-size:20px;
border-left:2px solid #dedede;
&:nth-last-child(1){
    border-right:2px solid #dedede;
}
`



interface Iprops {

}
interface IState {
    menu: Array<string>
}
class MenuListItem extends React.Component<Iprops, IState> {
    readonly state = {
        menu: ["Home", "Products", "About", "Pages", "Blog", "Contact"]
    };

    render() {
        return (
            <UL>
                {this.state.menu.map(x => <LI><LINK to={`/${x}`}>{x}</LINK></LI>)}

            </UL>
        )
    }

}



export default MenuListItem