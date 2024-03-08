import React from 'react';
import '../Styles/CartCard.css'

function CartCard(props) {
    const { data } = props;


  return (
    <div className='cart-card'>
        <div className='cart-item-image'>
            <img src={data.image} alt='cart' />
        </div>
        <div className='cart-item-info'>
            <h4>{data.title}</h4>
            <p><b>Price :</b> $ {data.price}</p>
            <button>Remove Form Cart</button>
        </div>
    </div>
  )
}

export default CartCard