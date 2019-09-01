import React from 'react'
import FavouriteSection from "../../components/SecondMenu/FavouriteSection";
import { connect } from "react-redux";



interface Iprops {
    favourite?: any;
    isOpen?: boolean;

}
interface IState {
    isOpen: boolean
}
class FavouriteBox extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    SwitchIsOpen = () => {
        this.setState((PrevState) => {
            return {
                isOpen: !PrevState.isOpen
            }
        });


    }



    render() {
        return (
            <div>
                <FavouriteSection favourite={this.props.favourite} SwitchIsOpen={this.SwitchIsOpen} isOpen={this.state.isOpen} />
                {console.log("conatiner")}
                {console.log(this.props.favourite)}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const mapStateToProps = (state: any) => {
    console.log(state)

    return {
        favourite: state.products.favourite,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBox) 
