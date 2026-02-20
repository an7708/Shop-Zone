    //import Video from "./Video";
    import "./VideoSection.css";
    import bgVideo from "../assets/bgvedio.mp4";
    import bgVideo2 from "../assets/bgvedio2.mp4";
    import bgVideo3 from "../assets/bgvedio3.mp4";

        function Video() {
    return (
        <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="video-card">
            <source src={bgVideo} type="video/mp4" />
        </video>

        <video autoPlay loop muted playsInline className="video-card">
            <source src={bgVideo2} type="video/mp4" />
        </video>

        <video autoPlay loop muted playsInline className="video-card">
            <source src={bgVideo3} type="video/mp4" />
        </video>
        </div>
    );
    }


    export default Video;
