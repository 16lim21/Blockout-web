/**
 * ToDo page that users see once they have logged in
 * @exports ToDos
 */
import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import DTPicker from "../components/DTPicker";

const NewToDoPage = styled.div``

const Container = styled.div`
    margin: 5rem;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    align-self: center;
    font-size: 3.5rem;
    font-weight: 600;
    color: white;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    color: white; 
    overflow: visible;
    padding: 1rem 0;
    margin: 1rem 0;
    border-width: 0 0 2px;
    outline: none;
    font-size: 1.5rem;
    -webkit-appearance: none;

    &:required{
        box-shadow: none;
    }
    &[type=number]{
        -moz-appearance: textfield;
    }
`;

const Submit = styled.input`
    padding: 0.875rem;
    width: 11.25rem;
    margin: 1rem 0 1rem auto;
    border: 0.125rem solid #FFFFFF;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #67A7FF;
    background-color: #FFFFFF;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        background-color: #67A7FF;
        color: #FFFFFF;
        border-color: #FFFFFF;
    }
`;

const NewToDo = () => {

    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [deadline, setDeadline] = useState('')
    const [buttonText, setButtonText] = useState('Create')
    let history = useHistory();

    const submit = (event) => {
        event.preventDefault()
        setButtonText('Creating..')
        let data = {
            name: name,
            duration: duration,
            deadline: deadline,
        }

        history.goBack()
        axios.post(process.env.REACT_APP_API_URL + "blockout/todo", data, { withCredentials: true })
            .then(response => {
                history.goBack()
                setName('')
                setDuration('')
                setDeadline('')
            })
            .catch(() => {
                setButtonText("Error, Redo!")
                console.log('message not sent')
            })
    }

    return (
        <NewToDoPage>
            <Container onSubmit={event => submit(event)}>
                <Header>
                    New To Do
                </Header>
                <StyledForm>
                    <StyledInput type="text" placeholder="Name"
                                onChange={event => setName(event.target.value)}
                                value={name}
                                required/>
                    <StyledInput type="number" placeholder="Duration in hours"
                                onChange={event => setDuration(event.target.value)}
                                value={duration}
                                required/>
                    <DTPicker setDeadline={setDeadline}/>
                    <Submit type="submit" value={buttonText}/>
                </StyledForm>
            </Container>
        </NewToDoPage>
    );
};

export default NewToDo;
