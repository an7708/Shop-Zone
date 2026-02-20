    // src/context/CartContext.jsx
    import { createContext, useContext, useState } from 'react';

    const CartContext = createContext();

    export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart (increase quantity if already exists)
    const addToCart = (product) => {
        setCartItems((prevItems) => {
        const existingItem = prevItems.find(item => item.id === product.id);
        
        if (existingItem) {
            // Increase quantity
            return prevItems.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        } else {
            // Add new item
            return [...prevItems, { ...product, quantity: 1 }];
        }
        });
    };

    // Remove item completely
    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    // Update quantity (can be used for + / - buttons later)
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
        removeFromCart(productId);
        return;
        }
        
        setCartItems(prev =>
        prev.map(item =>
            item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
        );
    };

    // Calculate total items count (for badge)
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        totalPrice
    };

    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    );
    }

    // Custom hook to use cart anywhere
    export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
    };


    export default CartContext;