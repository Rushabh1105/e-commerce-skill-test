import React from 'react';
import '../Styles/ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartThunk, deleteProductThunk } from '../Redux/ProductReducer';

function ProductCard(props) {

    const { data } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function navigateToDetailPage(){
        navigate(`/${data.id}/details`)
    }

    const addToCart = () => {
      dispatch(addToCartThunk(data));
    }

    const deleteProduct = () => {
      dispatch(deleteProductThunk(data));
    }

  return (
    <div className='product-card'>
        <img src={data.image} alt='prod'/>
        <h4>{data.title}</h4>
        <p>Price: ${data.price}</p>
        <div className='buttons'>
            <button className='edit'>Edit</button>
            <button className='add-cart' onClick={addToCart}>Add To Cart</button>
            <button className='delete' onClick={deleteProduct}>Delete</button>
        </div>

        <button className='more' onClick={navigateToDetailPage}>More Details</button>
    </div>
  )
}

export default ProductCard