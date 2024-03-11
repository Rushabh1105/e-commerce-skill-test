// Import react modules
import React from 'react';
// Import styling
import '../Styles/ProductCard.css';
// Import useNavigate hook
import { useNavigate } from 'react-router-dom';
// Import useDispatch hook
import { useDispatch } from 'react-redux';
// Import async actions
import { addToCartThunk, deleteProductThunk, productActions } from '../Redux/ProductReducer';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

// Product Card Component
function ProductCard(props) {
    // Get data from props
    const { data } = props;
    // declare navigate method
    const navigate = useNavigate();
    // declare dispatch method
    const dispatch = useDispatch();

    // Function to navigate to detail page
    function navigateToDetailPage(){
        navigate(`/${data.id}/details`)
    }

    // function to navigate update page
    function navvigateToUpdatePage(){
      dispatch(productActions.setProduct(data));
      navigate(`/${data.id}/update`)
    }

    // function to handle to cart
    const addToCart = () => {
      dispatch(addToCartThunk(data));
    }

    // function to delete feom cart
    const deleteProduct = () => {
      dispatch(deleteProductThunk(data));
    }

  // Return JSX 
  return (
    <div className='product-card'>
        {/* product image */}
        <img src={data.image} alt='prod'/>
        {/* product title */}
        <h4>{data.title}</h4>
        {/* product price */}
        <p>Price: ${data.price}</p>
        <div className='buttons'>
            {/* update button */}
            <button className='edit' onClick={navvigateToUpdatePage}><FontAwesomeIcon icon={faPenToSquare} /></button>
            {/* add to cart button */}
            <button className='add-cart' onClick={addToCart}>Add To Cart</button>
            {/* delete product button */}
            <button className='delete' onClick={deleteProduct}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        {/* button to navigate detail page */}
        <button className='more' onClick={navigateToDetailPage}>More Details</button>
    </div>
  )
}

export default ProductCard