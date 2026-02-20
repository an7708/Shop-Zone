    import { useParams } from "react-router-dom";
    import { useEffect, useState } from "react";

    function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

    return (
        <div style={styles.container}>
        <img src={product.thumbnail} alt={product.title} />
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
        </div>
    );
    }

    const styles = {
    container: {
        display: "flex",
        gap: "40px",
        padding: "40px",
    },
    };

    export default ProductDetails;
