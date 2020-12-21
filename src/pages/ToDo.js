/**
 * ToDo page that users see once they have logged in
 * @exports ToDos
 */
import React, { useState, useEffect } from "react";
import GoogleButton from "../components/GoogleButton";
import ToDoEvent from "../components/ToDoEvent"
import axios from "axios";
import styled from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";

const Title = styled.h1`
    margin-top: 10px;
    align-self: center;
    color: white;
`
const ToDos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const RowHeaders = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: white;
    padding: 0 1rem;
`

const EventTitle = styled.div`
    flex: 2 1 0;
`

const Duration = styled.div`
    flex: 1 1 0;
`

const DueDate = styled.div`
    flex: 1 1 0;
`

const Status = styled.div`
    flex: 1 1 0;
`

const NewEvent = styled.button`
    position: absolute;
    background: white;
    padding: 5px 8px;
    border: 2px solid #B9D9EB;
    border-radius: 10px;
    cursor: pointer;
`

const ToDo = () => {
    const [todos, setToDos] = useState([]);
    let match = useRouteMatch()
    let history = useHistory();

    //Reload data on page load
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
            .get(process.env.REACT_APP_API_URL + "blockout/todo", {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data)
                setToDos(response.data);
            })
            .catch((error) => {
                console.log("Some error found" + error.message);
            });
    };

    const deleteToDo = (todoId) => {
        console.log(todoId)
        axios
            .delete(process.env.REACT_APP_API_URL + `blockout/todo/${todoId}`, {
                withCredentials: true,
            })
            .then(() => setToDos(todos.filter(item => item._id !== todoId)))
            .catch((error) => {
                console.log("Some error found" + error.message);
            });
    };

    const createNewEvent = () => {
        history.push(`${match.path}/new`)
    }

    return (
        <>
            <Title>Blockout</Title>
            <ToDos>
                <RowHeaders>
                    <EventTitle></EventTitle>
                    <Duration>Duration</Duration>
                    <DueDate>Due Date</DueDate>
                    <Status>Status</Status>
                    <NewEvent onClick={createNewEvent}>New ToDo</NewEvent>
                </RowHeaders>
                <div>
                    {todos.map((todo) => (
                        <ToDoEvent key={todo._id}
                            name={todo.name}
                            duration={todo.duration}
                            deadline={todo.deadline}
                            deleteToDo={() => deleteToDo(todo._id)}
                        />
                    ))}
                </div>
            </ToDos>
            <GoogleButton />
        </>
    );
};

export default ToDo;
