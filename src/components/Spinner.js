import React from 'react';

const Spinner = () => {
    return(
        <div className='d-flex justify-content-center'>
            {/* flex를 적용시키는 부트스트랩 사용법 */}
            <div 
                className="spinner-border"
                role="status"
                style={{width:'3rem', height:'3rem'}}
                >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;