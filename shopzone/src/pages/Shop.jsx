    import { useEffect, useState } from "react";
    import ProductCard from "../components/ProductCard";

    function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, []);

    return (
        <div style={styles.grid}>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    );
    }

    const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "40px",
    },
    };

    export default Shop;
