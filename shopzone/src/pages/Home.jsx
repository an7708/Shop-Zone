    import Video from "../components/Video";
    import { Link } from "react-router-dom";
    import video from '../assets/video.mp4'; 

    function Home() {
    return (
            <div>
                <div className="hero">
        <div className="hero-content">
            <h1>
            World-class shopping
            <br />
            <span>whenever</span> <br></br>you need it.
            </h1>

            <p style={{fontWeight: "300", fontStyle:"italic"}}>Create stunning shopping experiences effortlessly.</p>

            <div style={styles.buttons}>
                <Link to="/shop" style={{ textDecoration: "none" }}>
                    <button style={styles.primaryBtn}>Start Shopping</button>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <button style={styles.secondaryBtn}>Contact</button>
                </Link>
                </div>
            </div>
        </div>
        <Video></Video>
        <section className="adpanel-hero">
    <div className="container">
        <div className="intro-text">
        <h2>Thoughts to cart <br></br>
            <span> in seconds. </span>
        </h2>
        <p>Generate high-quality product images and videos & picture your ideas — instantly.</p>
        </div>

        <div className="workflow">
        {/* Prompt column */}
        <div className="step prompt-step">
            <h3>Prompt</h3>
            <textarea
            className="prompt-input"
            defaultValue="MARS Matte Lip Liner | One Swipe Smooth Application | Long Lasting Lip Pencil (1.4gm) (03-BLOOD BATH)..."
            rows={5}
            placeholder="MARS Matte Lip Liner | One Swipe Smooth Application | Long Lasting Lip Pencil (1.4gm) (03-BLOOD BATH)..."
            />
            <button className="btn primary">Generate</button>
        </div>

        {/* Connector arrow */}
        <div className="arrow">→</div>

        {/* Image result */}
        <div className="step image-step">
            <h3>Generated Content</h3>
            <div className="preview image-preview">
            <div className="placeholder-content">
                <video
                src={video}
                alt="MARS Matte Lip Liner | One Swipe Smooth Application | Long Lasting Lip Pencil (1.4gm) (03-BLOOD BATH)..."
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                }}
                />
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
            </div>
        );
    }

    const styles= {
        hero: {
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        color: "white",
        textAlign: "center"
        },

        video: {
        position: "absolute",
        borderRadius:"20px",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -2,
        },

        overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",   // dark overlay
        zIndex: -1
        },

        heroContent: {
        position: "relative",
        zIndex: 1,
        maxWidth: "800px"
        },

        buttons: {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "30px"
        },

        primaryBtn: {
        background: "black",
        color: "white",
        border: "none",
        padding: "12px 28px",
        borderRadius: "30px",
        cursor: "pointer",
        fontSize: "15px"
        },

        secondaryBtn: {
        background: "black",
        color: "white",
        border: "none",
        padding: "12px 28px",
        borderRadius: "30px",
        cursor: "pointer",
        fontSize: "15px"
        }
    }

    export default Home;
