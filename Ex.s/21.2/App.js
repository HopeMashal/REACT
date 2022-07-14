import { useRef } from "react";
import video from "./video/video.mp4";

function App() {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="App">
            <video ref={videoRef} width="500">
                <source src={video}/>
            </video>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
}

export default App;
