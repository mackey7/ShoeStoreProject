import React from 'react'
import FaqCategory from '../../components/FaqCategory/FaqCategory'
interface Iprops {

}
interface IState {

}
class Faq extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <FaqCategory />
            </div>
        )
    }

}



export default Faq