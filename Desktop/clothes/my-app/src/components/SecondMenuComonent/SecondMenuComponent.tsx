import React, { Component } from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Styled from 'styled-components'

const NavWrapper = Styled.nav`
border-bottom:4px solid #ebe7df;
`
const Nav = Styled.div`
width:80%;
margin:0 auto;
display:flex;
flex-direction:row;
`
const Menu: any = Styled.div`
    display: ${(props: any) => (props.HideMenu ? 'none' : 'flex')}
    flex-direction: column;
    width: 100%;
    align-items: center;
    @media only screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
`
const HamburgerIcon = Styled.i`
display: block;
font-size: 30px;
cursor: pointer;
@media only screen and (min-width: 900px) {
    display: none;
}
`


interface IState {
    HideMenu: boolean;
}

interface IProps {
    HideMenu?: boolean;
}
class SecondMenuComponent extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            HideMenu: true
        }
    }

    SwitchHideMenu = () => {
        this.setState((PrevState) => {
            return {
                HideMenu: !PrevState.HideMenu
            }
        });
        console.log(this.state.HideMenu)

    }

    render() {
        const { SwitchHideMenu } = this
        return (
            <NavWrapper>
                <Nav>
                    <HamburgerIcon onClick={SwitchHideMenu} className="fas fa-bars"></HamburgerIcon>
                    <Menu HideMenu={this.state.HideMenu}>
                        <LeftSection />
                        <RightSection />
                    </Menu>
                </Nav>
            </NavWrapper >
        )
    }
}

export default SecondMenuComponent