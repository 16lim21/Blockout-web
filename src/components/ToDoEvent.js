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

const Delete = styled.button`
    position: absolute;
    right: 2rem;
`

const ToDoEvent = ({name, duration, deadline, deleteToDo}) => {

    const newDeadline = moment(deadline).format("ddd. M/D/YYYY, h:mm a")
    const status = moment(deadline).isBefore(moment()) ? "Completed" : "In Progress"

    return (
        <RowContainer>
            <EventName>{name}</EventName>
            <Duration>{duration}</Duration>
            <Deadline>{newDeadline}</Deadline>
            <Status>{status}</Status>
            <Delete onClick={deleteToDo}>Delete</Delete>
        </RowContainer>
    );
};

export default ToDoEvent;
