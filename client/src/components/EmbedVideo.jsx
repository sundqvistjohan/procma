import React from 'react'

const EmbedVideo = () => {
  return (
    <div
      className="video"
      style={{
        paddingBottom: "42.25%" /* 16:9 */,
        backgroundColor: "white"

      }}
    >
      <iframe
        style={{
          top: "-10%",
          position: "absolute",
          width: "100%",
          height: "80%",
        }}
        src={`https://www.youtube.com/embed/Im0EJ_Kil64?rel=0&controls=0&autoplay=1&loop=1&mute=1`}
        frameBorder="0"
      />
    </div>
  );
}

export default EmbedVideo
