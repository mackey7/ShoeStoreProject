import React from 'react'
import ContactCategory from '../../components/ContactCategory/ContactCategory'
interface Iprops {

}
interface IState {

}
class Contact extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <ContactCategory />
            </div>
        )
    }

}



export default Contact