import '../css/LoginModal.css'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { changeModal } from '../Slices/modalSlice'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { changeLoad } from '../Slices/loaderSlice'
import toast from 'react-hot-toast'
function LoginModal() {
    const dispatch = useDispatch()
    const handleLogin = async () => {
        dispatch(changeModal({
            load: false
        }))
        try {
            dispatch(changeLoad({
                load: true
            }))
            await signInWithPopup(auth, provider)
            dispatch(changeLoad({
                load: false
            }))
            toast.success("User logged in successfully")
        } catch (error) {
            dispatch(changeLoad({
                load: false
            }))
            toast.error(error.message)
        }
    }

    return (
        <div className='LoginModal'>
            <div className='loginModal__container'>
                <i className="bi bi-x-circle-fill loginModal__close" onClick={() => {
                    dispatch(changeModal({
                        load: false
                    }))
                }}></i>

                <h3>Please Login first to use all the features</h3>
                <GoogleButton type='dark' onClick={handleLogin} />
            </div>
        </div>
    )
}

export default LoginModal   