import './App.css';
import ReactDom from 'react-dom'
import { auth, provider } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userLogin, userLogout } from './Slices/userSlice';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import Product from './components/Product';
import Wishlist from './components/Wishlist';
import { Toaster } from 'react-hot-toast';
import Cart from './components/Cart';
import Loader from './components/Loader';
import LoginModal from './components/LoginModal';
import Payment from './components/Payment';
import PaymentConfirmation from './components/PaymentConfirmation';

function App() {

  const loading = useSelector(state => state.loaderReducer.load)
  const modal = useSelector(state => state.modalReducer.load)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userLogin({
            userName: user.displayName,
            uid: user.uid
          })
        )

      }
    })
    return () => {
      unsub()
    }

  }, [])


  return (
    <div className="App">
      {modal && ReactDom.createPortal(<LoginModal />, document.getElementById('modal'))}
      {loading && ReactDom.createPortal(< Loader />, document.getElementById('modal'))}
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<AuthProvider><Cart /></AuthProvider>} />
        <Route path='/wishlist' element={<AuthProvider><Wishlist /></AuthProvider>} />
        <Route path='/payment' element={<AuthProvider><Payment /></AuthProvider>} />
        <Route path='/paymentConfirmation' element={<AuthProvider><PaymentConfirmation /></AuthProvider>} />
      </Routes>
      {/* <Product /> */}
    </div >
  );
}

export default App;
