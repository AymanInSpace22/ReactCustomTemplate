import React, { useEffect, useRef } from 'react';
import '../styles/VideoBG.css';



const VideoBackground = () => {

//   // Explicitly declare the ref's type as HTMLVideoElement
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 2.0; // Adjust playback speed here
//     }
//   }, []);

  return (
    <>
    <div className="video-background">
      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="white.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    </>
  );
};

export default VideoBackground;

<script>
document.querySelector('video-background').playbackRate = 2.5;
</script>