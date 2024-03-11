import React, { useEffect, useState } from 'react';
// import data from '../data.json';
import CartCard from '../Component/CartCard';
import '../Styles/Cart.css';
import { useSelector } from 'react-redux';
import { productSelector } from '../Redux/ProductReducer';
import LoadingSpinner from '../Component/Loading';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  const { cart, loading, error } = useSelector(productSelector); 

  useEffect(() => {
    if(!loading){
      setCartData(cart)
    }
  }, [loading, cart])

  if(error){
    navigate('/');
  }


  return (
    <div className='cart'>
      {
        loading?<LoadingSpinner />:null
      }
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