    import { useCart } from '../context/CartContext';
    import { Link } from 'react-router-dom';

    export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
        <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <Link to="/shop">Continue Shopping</Link>
        </div>
        );
    }

    return (
        <div className="cart-page">
        <h1>Your Cart</h1>

        <div className="cart-items">
            {cartItems.map(item => (
            <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} width={80} />
                
                <div className="item-info">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)} × {item.quantity}</p>
                </div>

                <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                </button>
                </div>

                <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                >
                Remove
                </button>
            </div>
            ))}
        </div>

        <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
        </div>
        </div>
    );
    }