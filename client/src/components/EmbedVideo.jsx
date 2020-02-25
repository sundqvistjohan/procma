import React from 'react'

const EmbedVideo = () => {
  return (
    <div
      className="video"
      style={{
      }}
    >
      <iframe
        style={{
          top: "-10%",
          width: "100%",
          height: "600px",
        }}
        src={`https://www.youtube.com/embed/Im0EJ_Kil64?rel=0&controls=0&autoplay=1&loop=1&mute=1`}
        frameBorder="0"
      />
    </div>
  );
}

export default EmbedVideo
