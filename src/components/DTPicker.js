/**
 * ToDo page that users see once they have logged in
 * @exports ToDos
 */
import React, {useState} from "react";
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

const DTPicker = ({setDueDate}) => {

    const [value, setValue] = useState('')

    const handleChange = (value) => {
        if(typeof value == "object"){
            value = value.format("YYYY-MM-DD[T]HH:MM:SS")
            setDueDate(value)
        }
    }

    const valid = (current) => {
        let yesterday = moment().subtract(1, "day")
        return current.isAfter(yesterday)
    }

    return (
        <Datetime inputProps={inputProps} 
            onChange={handleChange} 
            isValidDate={valid}/>
    );
};

export default DTPicker;
