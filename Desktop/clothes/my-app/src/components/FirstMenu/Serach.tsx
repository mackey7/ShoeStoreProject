import React, { Component } from 'react'
import styled from 'styled-components'
import SearchContainer from '../../containers/SearchContainer/SearchContainer';

const Icon = styled.i`
    color:white;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size:24px;
    cursor: pointer;
    position:relative;
`
interface IState {
    OpenSearch: boolean;
}

class Search extends Component<{}, IState> {
    state = {
        OpenSearch: false
    }

    switchOpenSearch = () => {
        this.setState((prevState) => {
            return {
                OpenSearch: !prevState.OpenSearch
            };
        });
        console.log(this.state.OpenSearch)
    }

    render() {
        const { switchOpenSearch } = this
        const { OpenSearch } = this.state
        return (
            <div>
                <Icon onClick={switchOpenSearch} className="fa fa-search" ></Icon>
                {OpenSearch ? <SearchContainer switchOpenSearch={switchOpenSearch} /> : null}
            </div>

        )
    }

}

export default Search