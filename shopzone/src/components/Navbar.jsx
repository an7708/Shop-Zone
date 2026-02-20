    import { Link } from "react-router-dom";
    import { useState } from 'react';
    import { Search } from 'lucide-react';
        function Navbar() {
        const [searchQuery, setSearchQuery] = useState('');
        const handleSearch = (e) => {
            e.preventDefault();
            console.log('Searching for:', searchQuery);
        };
    return (
        <nav className="nav-right" style={styles.nav}>
        <Link to="/" className="logo">
            ShopZone
        </Link>

        {/* <div style={styles.right}>
                <form className="search-form" onSubmit={handleSearch}>
                <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                />
                <button type="submit" className="search-btn">
                Search
                </button>
            </form>

            <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            </div>
        </div> */}

        {/* <div className="search-wrapper">
            <form className="airbnb-search" onSubmit={handleSearch}>
                <div className="search-field location-field">
                <Search size={20} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search products, brands, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                </div>

                <button type="submit" className="search-button">
                    Search
                <Search size={20} />
                </button>
            </form>
            <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            </div>
            </div> */}
            {/* Centered search bar */}
            <div className="search-wrapper">
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
            {/* <div className="nav-right"></div> */}
            <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            </div>
        </nav>
    );
    }


    const styles = {
        nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    position: "sticky",
    top: 0,

    background: "rgba(255, 255, 255, 0.15)",   
    backdropFilter: "blur(3px)",             
    WebkitBackdropFilter: "blur(12px)",       

    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",

    zIndex: 1000
    },


    logo: {
        fontSize: "22px",
        fontWeight: 600,
        margin: 0
    },

    right: {
        display: "flex",
        alignItems: "center",
        gap: "30px"
    },

    links: {
        display: "flex",
        gap: "24px"
    },

    link: {
        color: "grey",
        textDecoration: "none",
        fontWeight: 300,     
        fontSize: "18px"
    },
    };


    export default Navbar;
