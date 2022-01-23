import React from "react";

const Spinner = ()=>{
    return(
        <div className="d-flex justify-content-center">
            <div
                className="spinner-border"
                style={{widht:'3rem', height:'3rem'}}
                // role={status}
            >
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Spinner;