import React from 'react';
import PersonsCardsComponent from '../../Components/PersonsCardsComonent/PersonsCardsComponent'
import { fetchUser } from '../../Actions/users'
import { connect } from 'react-redux'


interface IProps {
    fetchUser(): void;
    users: any;
}

class HomePageContainer extends React.Component<IProps> {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        const { users } = this.props.users
        return (
            <div>
                <PersonsCardsComponent users={users} />
            </div>
        )


    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}
const mapStateToProps = (state: any) => {
    return {
        users: state.users
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer)

