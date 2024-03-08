import React from 'react';
import '../Styles/ProductCard.css'
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

    const { data } = props;
    const navigate = useNavigate();

    function navigateToDetailPage(){
        navigate(`/${data.id}/details`)
    }

  return (
    <div className='product-card'>
        <img src={data.image} alt='prod'/>
        <h4>{data.title}</h4>
        <p>Price: ${data.price}</p>
        <div className='buttons'>
            <button className='edit'>Edit</button>
            <button className='add-cart'>Add To Cart</button>
            <button className='delete'>Delete</button>
        </div>

        <button className='more' onClick={navigateToDetailPage}>More Details</button>
    </div>
  )
}

export default ProductCard