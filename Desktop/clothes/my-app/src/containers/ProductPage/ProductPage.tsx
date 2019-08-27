import React from 'react'
import ProductPageComponent from '../../components/ProductPageComponent/ProductPageComponent'


interface Iprops {

}
interface IState {

}
class ProductPage extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <ProductPageComponent />

            </div>
        )
    }

}



export default ProductPage