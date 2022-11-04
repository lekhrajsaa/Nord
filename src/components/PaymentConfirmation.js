import '../css/PaymentConfirmation.css'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { removeAllCart } from '../Slices/cartSlice'

function PaymentConfirmation() {

    const [resolve, setResolve] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {

        setTimeout(() => {
            setResolve(Math.floor(Math.random() * 2))
        }, 3000)
    }, [])

    if (resolve === 1) {
        toast.success('Payment successfull', {
            id: 'clipboard'
        })
        dispatch(removeAllCart())
    }
    else if (resolve === 0) {
        toast.error("Payment unsuccessfull", {
            id: 'clipboard'
        })
    }


    console.log(resolve)
    return (
        <div className='PaymentConfirmation'>
            {resolve === null ? <>
                <div className="lds-facebook"><div></div><div></div><div></div></div>

                <p>Please don't close the tab payment is processing</p> </> : <></>}


            {resolve === 1 && <Navigate to='/' />}


            {resolve === 0 && <Navigate to='/cart' />}

        </div>
    )
}

export default PaymentConfirmation