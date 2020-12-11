/**
 * ToDo page that users see once they have logged in
 * @exports DTPicker
 */
import React from "react";
import Datetime from "react-datetime";
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import "./components.css"


const inputProps = {
    placeholder: "To Do Deadline",
    className: "DTPicker",
    required: true,
    readOnly: true
}

const DTPicker = ({setDeadline}) => {

    const handleChange = (value) => {
        if(typeof value == "object"){
            const newValue = moment.utc(value).format("YYYY-MM-DD[T]hh:mm")
            setDeadline(newValue)
        }
    }

    const valid = (current) => {
        let yesterday = moment().subtract(1, "day")
        return current.isAfter(yesterday)
    }

    return (
        <Datetime inputProps={inputProps} 
            onChange={handleChange} 
            isValidDate={valid}
            utc={false}/>
    );
};

export default DTPicker;
