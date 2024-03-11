// import react modules
import React, { useEffect, useState } from 'react'
// import router hooks
import { useNavigate, useParams } from 'react-router-dom';
// import styling
import '../Styles/ProductDetail.css';
// import icons
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import redux hooks
import { useDispatch, useSelector } from 'react-redux';
// import async actions
import { addToCartThunk, getProductByIdThunk, productSelector } from '../Redux/ProductReducer';
// import loader component
import LoadingSpinner from '../Component/Loading';
// import toast component
import { toast } from 'react-toastify';

// Product Detail Page
function ProductDetail() {
    // Get id from parameter
    const { id } = useParams();
    // get data from selector
    const { loading, error, products } = useSelector(productSelector);
    // defined states for data
    const [data, setData] = useState({});
    // dispathc method
    const dispatch = useDispatch();
    // navigate method
    const navigate = useNavigate();
    // to dispatch action depending upon condition
    useEffect(() => {
        // dispatch get product by id thunk
        dispatch(getProductByIdThunk(id));
    }, [dispatch, id]);

    // set product data to data
    useEffect(() => {
        if(!loading){
            const d = products.find((prod) => prod.id === Number(id))
            if(!d){
                toast.error('Product not found');
                navigate('/')
            }
            setData(d);   
        }
    }, [loading, id, products, navigate]);

    // function to handle add to cart
    const addToCart = () => {
        dispatch(addToCartThunk(data));
        if(error){
            navigate('/')
        }  
    }

    // Return JSX
  return (
    <>
        {
            loading?
                <LoadingSpinner />:
                <div className='product-detail'>
                    {/* product image */}
                    <div className='product-image'>
                        <img src={data.image} alt='prod' />
                    </div>
                    {/* product info */}
                    <div className='product-info'>
                        <h3>{data.title}</h3>
                        <p><b>Category :</b> {data.category}</p>
                        <h4><b>Price :</b> $ {data.price} </h4>
                        <p><b>Rating :</b> {data.rating?data.rating.rate:""} <FontAwesomeIcon icon={faStar} /></p>
                        <p><b>Total Reviews: </b>{data.rating?data.rating.count:""}</p>
                        {/* Add to cart button */}
                        <button className='add details' onClick={addToCart}> Add To Cart </button>
                    </div>
                </div>
        }
    </>
  )
}

export default ProductDetail