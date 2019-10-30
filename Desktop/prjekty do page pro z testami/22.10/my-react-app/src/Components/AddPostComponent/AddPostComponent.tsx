import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background:rgb(0,0,0, 0.5);
    z-index:999;
    left:0;
    top:0;
`
const ModalWindow = styled.section`
    background-color: #fefefe;
    border:2px solid black;
    width:450px;
    max-height:100%;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-top:2px  solid black;
    border-bottom:2px  solid black;
    margin-bottom:20px;
    padding:0px 20px 20px 20px;
`

const Input = styled.input`
    border:2px solid black;
    margin-bottom:10px;
    width:300px;
`

const Label = styled.label`
    padding: 0px 20px;
    font-weight:900;
`

const TextArea = styled.textarea`
    border:2px solid black;
    width:300px;
    height:150px;
`
const Row = styled.div`
    display:flex;
    justify-content:space-between;
    min-width:100%;
`
const BtnContainer = styled.div`
    margin-top:30px;
    width:100%;
    display:flex;
    justify-content:flex-end;
`
const Title = styled.span`
    padding:5px;
    font-weight:900;
`

const CancelInput = styled.input`
    color:#000;
    background:#fff;
    border:2px solid #000;
    padding:10px 40px;
    font-size:14px;
    -webkit-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    -moz-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    cursor: pointer;
    margin-right:10px;
    &:hover{
        background:#d9d9d9;
        
    }
`

const SaveInput = styled.input`
    color:#fff;
    background: #075394;
    border:2px solid #000;
    padding:10px 40px;
    font-size:14px;
    -webkit-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    -moz-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    cursor: pointer;
    &:hover{
        background:blue;
        color:#000;
    }
`
interface IProps {
    cancel: any;
    save?: any;
    addPost?: any;
    userId: any;
}
interface IState {
    title: string;
    body: string;
    [key: string]: any;
}

class AddPostComponent extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let newValue = e.target.value;
        this.setState({ [name]: newValue })
    }
    handleSubmit = () => {
        const { addPost, cancel } = this.props
        console.log('handleSubmit')
        addPost(this.props.userId, this.state.title, this.state.body);
        cancel()
        console.log(addPost(this.state.title, this.state.body))
    }

    render() {
        const { handleSubmit, handleChange } = this;
        const { cancel } = this.props

        return (
            <Wrapper>
                <ModalWindow>
                    <Title> Add Post</Title>
                    <Form onSubmit={handleSubmit}>
                        <h2> Add Post </h2>
                        <Row>
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" name="title" value={this.state.title} onChange={handleChange} />
                        </Row>
                        <Row>
                            <Label htmlFor="body" >Body</Label>
                            <Input name="body" value={this.state.body} onChange={handleChange} ></Input>
                        </Row>
                        <BtnContainer>
                            <CancelInput onClick={cancel} type="button" value="Cancel" />
                            <SaveInput type="submit" value="Save" />
                        </BtnContainer>
                    </Form>
                </ModalWindow>
            </Wrapper>
        )
    }
}

export default AddPostComponent