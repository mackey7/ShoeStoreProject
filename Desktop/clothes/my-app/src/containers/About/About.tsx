import React from 'react'
import AboutCategory from '../../components/AboutCategory/AboutCategory'


interface Iprops {

}
interface IState {

}
class About extends React.Component<Iprops, IState> {

    render() {
        return (
            <div>
                <AboutCategory />
            </div>
        )
    }

}



export default About