import React from 'react';
import '../Styles/ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartThunk, deleteProductThunk, productActions } from '../Redux/ProductReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function ProductCard(props) {

    const { data } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function navigateToDetailPage(){
        navigate(`/${data.id}/details`)
    }

    function navvigateToUpdatePage(){
      dispatch(productActions.setProduct(data));
      navigate(`/${data.id}/update`)
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
            <button className='edit' onClick={navvigateToUpdatePage}><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className='add-cart' onClick={addToCart}>Add To Cart</button>
            <button className='delete' onClick={deleteProduct}><FontAwesomeIcon icon={faTrash} /></button>
        </div>

        <button className='more' onClick={navigateToDetailPage}>More Details</button>
    </div>
  )
}

export default ProductCard