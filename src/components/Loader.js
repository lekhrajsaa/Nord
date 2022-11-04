import React from 'react'
import '../css/Loader.css'


function Loader() {
    return (
        <div className='loader__container'>
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

    )
}

export default Loader   