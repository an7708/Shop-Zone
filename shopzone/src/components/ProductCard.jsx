    // import { Link } from "react-router-dom";

    // function ProductCard({ product }) {
    // return (
    //     <div style={styles.card}>
    //     <img src={product.thumbnail} alt={product.title} style={styles.img} />
    //     <h3>{product.title}</h3>
    //     <p>${product.price}</p>

    //     <Link to={`/product/${product.id}`}>
    //         <button style={styles.btn}>View Details</button>
    //     </Link>
    //     </div>
    // );
    // }

    // const styles = {
    // card: {
    //     border: "1px solid #ddd",
    //     padding: "15px",
    //     textAlign: "center",
    //     borderRadius: "8px",
    // },
    // img: {
    //     width: "100%",
    //     height: "180px",
    //     objectFit: "cover",
    // },
    // btn: {
    //     marginTop: "10px",
    //     padding: "8px 15px",
    //     cursor: "pointer",
    // },
    // };

    // export default ProductCard;


    import { Link } from 'react-router-dom';

    function ProductCard({ product }) {
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

            <Link to={`/product/${product.id}`} className="view-details-btn">
            View Details
            </Link>
        </div>
        </div>
    );
    }

    export default ProductCard;