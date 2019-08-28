import React from 'react'
import FavouritePageComponent from "../../components/FavouritePageComponent/FavouritePageComponent"


interface Iprops {

}
interface IState {

}
class FavouritePage extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <FavouritePageComponent />

            </div>
        )
    }

}



export default FavouritePage