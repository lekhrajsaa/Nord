import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/Payment.css'
function Payment() {
    const [form, setForm] = useState({
        country: '',
        state: "",
        pinCode: "",
        city: "",
        phoneNumber: "",
        email: "",
        atm: "",
        exp: "",
        cvv: "",
        userName: "",
    })
    useEffect(() => {
        console.log(form)
    }, [form])
    const cartItems = useSelector(state => state.cartReducer.item)
    const total = cartItems.reduce((accumulator, e) => { return accumulator + (e.price * e.qty) }, 0).toFixed(2)
    const user = useSelector(state => state.userReducer)
    const countryRef = useRef()
    const stateRef = useRef()
    const pinCodeRef = useRef()
    const cityRef = useRef()
    const phoneNumberRef = useRef()
    const emailRef = useRef()
    const atmRef = useRef()
    const expRef = useRef()
    const cvvRef = useRef()
    const userNameRef = useRef()
    const navigate = useNavigate();

    const handleClick = () => {
        if (form.country && form.state && form.pinCode && form.city && form.phoneNumber && form.email && form.atm && form.exp && form.cvv && form.userName) {
            navigate('/paymentConfirmation')
        }
        else {
            toast.error("please fill all the details")
        }
    }


    return (
        <div className='Payment'>
            <h1>Hello {user.userName}, your sub-total is ${total}</h1>
            <p style={{ marginTop: "1rem" }}>Please fill up the form below to proceed</p>
            <h2 style={{ marginTop: "2rem" }}>Address and Contact details *</h2>
            <div className='payment__address'>
                <div className='payment__address-item'>
                    <p>Country :</p>
                    <input type="text" ref={countryRef} onChange={() => {
                        setForm({
                            ...form,
                            country: countryRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>State :</p>
                    <input type="text" ref={stateRef} onChange={() => {
                        setForm({
                            ...form,
                            state: stateRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>Pin Code :</p>
                    <input type="text" ref={pinCodeRef} onChange={() => {
                        setForm({
                            ...form,
                            pinCode: pinCodeRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>City :</p>
                    <input type="text" ref={cityRef} onChange={() => {
                        setForm({
                            ...form,
                            city: cityRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>PhoneNumber :</p>
                    <input type="text" ref={phoneNumberRef} onChange={() => {
                        setForm({
                            ...form,
                            phoneNumber: phoneNumberRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>Email :</p>
                    <input type="email" ref={emailRef} onChange={() => {
                        setForm({
                            ...form,
                            email: emailRef.current.value
                        })
                    }} />
                </div>

            </div>
            <h2 style={{ marginTop: "2rem" }}>Payment details *</h2>
            <div className='payment__address'>
                <div className='payment__address-item'>
                    <p>ATM Number :</p>
                    <input type="text" ref={atmRef} onChange={() => {
                        setForm({
                            ...form,
                            atm: atmRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>Expiry Year :</p>
                    <input type="text" ref={expRef} onChange={() => {
                        setForm({
                            ...form,
                            exp: expRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>CVV :</p>
                    <input type="text" ref={cvvRef} onChange={() => {
                        setForm({
                            ...form,
                            cvv: cvvRef.current.value
                        })
                    }} />
                </div>
                <div className='payment__address-item'>
                    <p>Card holder's name :</p>
                    <input type="text" ref={userNameRef} onChange={() => {
                        setForm({
                            ...form,
                            userName: userNameRef.current.value
                        })
                    }} />
                </div>


            </div>
            <button to='/paymentConfirmation' className='cart__button' style={{
                fontWeight: 'normal',
                marginTop: "2rem",
                width: "40%",
                cursor: "pointer"
            }} onClick={handleClick}>Proceed to Payment</button>
        </div>
    )
}

export default Payment  