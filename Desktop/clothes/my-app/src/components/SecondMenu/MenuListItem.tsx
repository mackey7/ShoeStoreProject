import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.nav`
`

const Nav = styled.div`

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
            <ul>
                {this.state.menu.map(x => <li><Link to={`/${x}`}>{x}</Link></li>)}

            </ul>
        )
    }

}



export default MenuListItem