import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./Reviewitem.css'

const ReviewItem = ({product,handleRemoveItem}) => {
    const {name,price,quantity,img,shipping,id}=product
    return (
        <div className='review-item'>
            <div>
              <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                  <p>{name}</p>
                  <p><small>Price:{price}</small></p>
                  <p><small>Shipping:{shipping}</small></p>
                  <p><small>Quantity:{quantity}</small></p>
                  
                </div>
            </div>
            <div className="delete-container">
                <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                  <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;