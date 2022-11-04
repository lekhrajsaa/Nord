import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


function AuthProvider({ children }) {

    const user = useSelector(state => state.userReducer.uid)
    if (user)
        return (
            <>{children}</>
        )
    else {
        return (<Navigate to={'/'} />)
    }
}

export default AuthProvider 