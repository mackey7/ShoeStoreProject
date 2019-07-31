import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
interface Iprops {

}
interface IState {

}
class HeaderContainer extends React.Component<Iprops, IState> {

    render() {
        return (
            <React.Fragment>
                <Carousel />
            </React.Fragment >
        )
    }

}



export default HeaderContainer