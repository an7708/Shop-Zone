    import { Link } from "react-router-dom";
    import { useState } from 'react';
    import { useCart } from '../context/CartContext';
    import { Search } from 'lucide-react';
    import { ShoppingCart } from 'lucide-react';
    import './Navbar.css';

        function Navbar() {
            const { cartCount } = useCart();
        const [searchQuery, setSearchQuery] = useState('');
        const handleSearch = (e) => {
            e.preventDefault();
            console.log('Searching for:', searchQuery);
        };
                return (
    <nav className="navbar">
        <div className="nav-container">

        {/* LEFT */}
        <Link to="/" className="logo">
            ShopZone
        </Link>

        {/* CENTER */}
        <div className="search-center">
            <form className="search-form" onSubmit={handleSearch}>
            <div className="search-field">
                <Search size={18} className="search-icon" />
                <input
                type="search"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                />
            </div>
            <button type="submit" className="search-btn">
                <Search size={16} />
            </button>
            </form>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
            <Link to="/" className="nav-link">Home</Link>

            <Link to="/cart" className="cart-link">
            <div className="cart-icon-wrapper">
                <ShoppingCart size={24} strokeWidth={2} />
                {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
                )}
            </div>
            </Link>
        </div>

        </div>
    </nav>
    );
    }


    // const styles = {
    //     nav: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: "20px 60px",
    // position: "sticky",
    // top: 0,

    // background: "rgba(255, 255, 255, 0.15)",   
    // backdropFilter: "blur(3px)",             
    // WebkitBackdropFilter: "blur(12px)",       

    // border: "1px solid rgba(255, 255, 255, 0.3)",
    // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    // borderRadius: "20px",

    // zIndex: 1000
    // },


    // logo: {
    //     fontSize: "22px",
    //     fontWeight: 600,
    //     margin: 0
    // },

    // right: {
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "30px"
    // },

    // links: {
    //     display: "flex",
    //     gap: "24px"
    // },

    // link: {
    //     color: "grey",
    //     textDecoration: "none",
    //     fontWeight: 300,     
    //     fontSize: "18px"
    // },
    // };


    export default Navbar;
