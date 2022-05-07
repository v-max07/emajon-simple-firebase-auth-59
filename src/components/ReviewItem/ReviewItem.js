import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details">
                <h5 title={name}>
                    {name.length > 20 ? name.slice(0, 20) + "..." : name}
                </h5>
                <p>Price:$ {price} </p>
                <p>Shipping: {shipping} </p>
            </div>
            <button>
                <FontAwesomeIcon onClick={()=>handleRemoveProduct(product)} className='trashIcon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;