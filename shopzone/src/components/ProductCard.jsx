import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

    function ProductCard({ product }) {
        const { addToCart } = useCart();
    return (
        <div className="product-card">
        <div className="image-wrapper">
            <img
            src={product.thumbnail || product.images?.[0] || 'https://via.placeholder.com/300'}
            alt={product.title}
            className="product-image"
            loading="lazy"
            />
        </div>

        <div className="product-info">
            <h3 className="product-title">{product.title}</h3>

            <div className="price-row">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
                <>
                <span className="original-price">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
                </>
            )}
            </div>

            <p className="product-category">{product.category}</p>

            <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}>
            Add to Cart
        </button>

            <Link to={`/product/${product.id}`} className="view-details-btn">
            View Details
            </Link>
        </div>
        </div>
    );
    }

    export default ProductCard;