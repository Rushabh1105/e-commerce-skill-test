import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/ProductDetail.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartThunk, deleteProductThunk, getProductByIdThunk, productSelector } from '../Redux/ProductReducer';
import LoadingSpinner from '../Component/Loading';
import { toast } from 'react-toastify';

function ProductDetail() {

    const { id } = useParams();
    const { product, loading, error, products } = useSelector(productSelector);

    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductByIdThunk(id));
    }, [dispatch, id]);

    useEffect(() => {
        if(!loading){
            const d = products.find((prod) => prod.id === Number(id))
            if(!d){
                toast.error('Product not found');
                navigate('/')
            }
            setData(d);   
        }
    }, [loading, id, products]);

    const addToCart = () => {
        dispatch(addToCartThunk(data));
        if(error){
            navigate('/')
        }  
    }

  return (
    <>
        {
            loading?
                <LoadingSpinner />:
                <div className='product-detail'>
                    <div className='product-image'>
                        <img src={data.image} alt='prod' />
                    </div>
                    <div className='product-info'>
                        <h3>{data.title}</h3>
                        <p><b>Category :</b> {data.category}</p>
                        <h4><b>Price :</b> $ {data.price} </h4>
                        <p><b>Rating :</b> {data.rating?data.rating.rate:""} <FontAwesomeIcon icon={faStar} /></p>
                        <p><b>Total Reviews: </b>{data.rating?data.rating.count:""}</p>

                        <button className='add details' onClick={addToCart}> Add To Cart </button>
                    </div>
                </div>
        }
    </>
  )
}

export default ProductDetail