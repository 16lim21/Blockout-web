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

const DueDate = styled.div`
    flex: 1 1 0;
`

const Status = styled.div`
    flex: 1 1 0;
`

const ToDoEvent = ({name, duration, duedate, status}) => {

    const newDate = moment(duedate).format("ddd. M/D/YYYY, h:mm a")

    return (
        <RowContainer>
            <EventName>{name}</EventName>
            <Duration>{duration}</Duration>
            <DueDate>{newDate}</DueDate>
            <Status>{status}</Status>
        </RowContainer>
    );
};

export default ToDoEvent;
