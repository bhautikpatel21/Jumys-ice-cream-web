import React from 'react';

const ProductCard = ({ product }) => {
  const { name, image, price, discount, rating, reviews } = product;
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return (
    <div className="product-card">
      {discount && <span className="discount">- {discount}%</span>}
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <i key={i} className="fa fa-star-o"></i>
          ))}
          <span>({reviews} reviews)</span>
        </div>
        <div className="product-price">
          {discount && <span className="original-price">${price}</span>}
          <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="product-actions">
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn view-details">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;