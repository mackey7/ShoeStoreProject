import React from 'react';
import PersonCardItemComponent from '../PersonCardItemComponent/PersonCardItemComponent'
import styled from 'styled-components'
import { Loaders } from '../../Helpers/loaders'
import { Center } from '../../Helpers/center'
const Wrapper = styled.section`
height:100%;
display:flex;
flex-wrap:wrap;
align-content: space-around;
justify-content: center;
`

interface IProps {
    users: any;

}

const PersonsCardsComponent: React.FC<IProps> = ({ users }) => {
    if (users.length > 0) {
        return (
            <Wrapper >
                {
                    users.map((item: any) =>
                        < PersonCardItemComponent key={item.id} id={item.id} keyId={item.id} name={item.name} email={item.email} phone={item.phone} webiste={item.website} companyName={item.company.name} companyCatchPhrase={item.company.catchPhrase} companyBs={item.company.bs} />
                    )
                }
            </Wrapper >
        );
    } else {
        return (
            <Center>
                <Loaders>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loaders>
                <span>Loading</span>
            </Center>

        )
    }
}

export default PersonsCardsComponent;
