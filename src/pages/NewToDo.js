/**
 * ToDo page that users see once they have logged in
 * @exports ToDos
 */
import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const NewToDoPage = styled.div``

const Container = styled.div`
    position: relative;
    padding: 2rem;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    margin: 2.5rem;
    font-family: 'Source Sans Pro', sans-serif;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    font-weight: 600;
    color: #FFFFFF;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    &:required{
        box-shadow: none;
    }
`;

const Submit = styled.input`
    padding: 0.875rem;
    width: 11.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
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
    const [dueDate, setDueDate] = useState('')
    let history = useHistory();

    const submit = (event) => {
        event.preventDefault()
        history.goBack()
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
                    <Submit type="submit" value="Create"/>
                </StyledForm>
            </Container>
        </NewToDoPage>
    );
};

export default NewToDo;
