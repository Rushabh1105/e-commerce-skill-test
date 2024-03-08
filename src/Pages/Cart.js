import React, { useEffect, useState } from 'react';
import data from '../data.json';
import CartCard from '../Component/CartCard';
import '../Styles/Cart.css';

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(data.cart)
  }, [])

  return (
    <div className='cart'>
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