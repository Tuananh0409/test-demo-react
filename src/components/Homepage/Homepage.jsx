import videoHomePage from "../../assets/video-homepage.mp4"
const Homepage = () => {
    return (
        <div className="homepage-container">
           <video autoPlay loop muted>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
           </video>

           <div className="homepage-content">
                <div className="homepage-content-title"> There's a better way to ask</div>
                <div className="homepage-content-description"> When your forms break the norm, more people fill them out. Think branded designs, video content, and relevant follow-up questions.</div>
                <div className="homepage-content-btn">
                    <button>Get started-it's free</button>
                </div>
           </div>
        </div>
    )
}

export default Homepage;