import { useState } from "react";
export const useInput = (initialValue) => {

    const [value, setValue] = useState(initialValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return {
        value,
        onChange: handleChange,
        setValue 
    };
};


/** USECASE
 * import useInput from "./useInput"
 * 
 * const email = useInput("")
 * <input placeholder="Email" value={email.value} onChange={email.onChange}/>
 * 
    const submitForm = (event) => {
        event.preventDefault();
        console.log("email", email.value);
        console.log("password", password.value);
    };
 */