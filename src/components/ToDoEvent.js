/**
 * ToDo page that users see once they have logged in
 * @exports ToDoEvent
 */
import React from "react";
import moment from "moment";
import styled from "styled-components";

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: white;
    border: 2px solid;
    border-color: white;
    border-radius: 1rem;
    padding: 1rem 1rem;
    margin: 0.5rem 0;
`

const EventName = styled.div`
    flex: 2 1 0;
`

const Duration = styled.div`
    flex: 1 1 0;
`

const Deadline = styled.div`
    flex: 1 1 0;
`

const Status = styled.div`
    flex: 1 1 0;
`

const ToDoEvent = ({key, name, duration, deadline, status}) => {

    console.log(deadline)
    const newDeadline = moment(deadline).format("ddd. M/D/YYYY, h:mm a")

    return (
        <RowContainer key={key}>
            <EventName>{name}</EventName>
            <Duration>{duration}</Duration>
            <Deadline>{newDeadline}</Deadline>
            <Status>{status}</Status>
        </RowContainer>
    );
};

export default ToDoEvent;
