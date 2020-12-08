/**
 * Home page that users see once they have logged in
 * @exports Home
 */
import React, { useState, useEffect } from "react";
import GoogleButton from "../components/GoogleButton";
import axios from "axios";
import styled from "styled-components";

const Background = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

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
    background: white;
    padding: 5px 8px;
    border: 2px solid #B9D9EB;
    border-radius: 10px;
    cursor: pointer;
`

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
            .get(process.env.REACT_APP_API_URL + "blockout/todo", {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setEvents(response.data);
            })
            .catch((error) => {
                console.log("Some error found" + error.message);
            });
    };

    return (
        <Background>
            <Title>Blockout</Title>
            {/* <button onClick={getData}>Click Me</button> */}
            <div>
                {events.map((event) => (
                    <div key={event.id}>
                        {event.summary} created by {event.creator.email}
                    </div>
                ))}
            </div>
            <ToDos>
                <RowHeaders>
                    <EventTitle></EventTitle>
                    <Duration>Duration</Duration>
                    <DueDate>Due Date</DueDate>
                    <Status>Status</Status>
                    <NewEvent>New ToDo</NewEvent>
                </RowHeaders>
            </ToDos>
            <GoogleButton />
        </Background>
    );
};

export default Home;
