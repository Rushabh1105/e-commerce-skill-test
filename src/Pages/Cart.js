// import react modules
import React, { useEffect, useState } from 'react';
// import cart card component
import CartCard from '../Component/CartCard';
// import styling
import '../Styles/Cart.css';
// import useselector hook
import { useSelector } from 'react-redux';
// import product selector from reducer
import { productSelector } from '../Redux/ProductReducer';
// import loading screen
import LoadingSpinner from '../Component/Loading';
// import use navigate hook
import { useNavigate } from 'react-router-dom';

// Cart page
function Cart() {
  // make state for cart data
  const [cartData, setCartData] = useState([]);
  // declare navigate method
  const navigate = useNavigate();

  // get data from selector
  const { cart, loading, error } = useSelector(productSelector); 

  // set cart data
  useEffect(() => {
    if(!loading){
      setCartData(cart)
    }
    if(error){
      navigate('/')
    }
  }, [loading, cart, error, navigate])

  // Return JSX
  return (
    <div className='cart'>
      {
        loading?<LoadingSpinner />:null
      }
      {/* cart card component */}
      <div className='cart-items'>
        {
          cartData?cartData.map((cart, idx) => (
            <CartCard key={idx} data={cart} />
          )):null
        }
      </div>
    </div>
  )
}

export default Cart