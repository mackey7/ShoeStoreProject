import React, { Component } from 'react'
import styled from 'styled-components'

import SearchModal from './SearchModal'

const Icon = styled.i`
color:white;
display: flex;
justify-content: center;
align-items: center; 
font-size:24px;
cursor: pointer;
position:relative;

`


class Search extends Component {
    state = {
        OpenSearch: false
    }

    switchOpenSearch = () => {
        this.setState((state) => {
            return {
                OpenSearch: !this.state.OpenSearch
            }
        });
        console.log(this.state.OpenSearch)
    }

    render() {
        const { switchOpenSearch } = this
        const { OpenSearch } = this.state
        return (
            <div>
                <Icon onClick={switchOpenSearch} className="fa fa-search" ></Icon>
                {OpenSearch ? <SearchModal switchOpenSearch={switchOpenSearch} /> : null}
            </div>

        )
    }

}

export default Search