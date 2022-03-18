import React from "react";

const InputField = ({type, value, placeholder, onCahnge, errorMessage}) => {
    return(
        <>
            <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onCahnge}
        /><br />
         <div style={{color: 'red'}}>{errorMessage}</div>
      </>
    )
}

export default InputField;