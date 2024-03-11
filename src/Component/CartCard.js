// Import react
import React from 'react';
// Import styling
import '../Styles/CartCard.css'
// Import useDispathch hook
import { useDispatch } from 'react-redux';
// import async action
import { removeFromCartThunk } from '../Redux/ProductReducer';

function CartCard(props) {
    // Get data from props
    const { data } = props;
    // declare dispatch method
    const dispatch = useDispatch();
    // Function to remove item from cart
    const handleRemove = () => {
      // Dispatch remove from cart action
      dispatch(removeFromCartThunk(data));
    }

    // Return JSX
    return (
      <div className='cart-card'>
          <div className='cart-item-image'>
            {/* Item Image */}
              <img src={data.image} alt='cart' />
          </div>
          <div className='cart-item-info'>
            {/* Item name */}
              <h4>{data.title}</h4>
              {/* Item price */}
              <p><b>Price :</b> $ {data.price}</p>
              {/* Button to remove from cart */}
              <button onClick={handleRemove}>Remove Form Cart</button>
          </div>
      </div>
    )
}

export default CartCard