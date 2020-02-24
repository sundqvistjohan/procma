import React from 'react'

const EmbedVideo = () => {
  return (
    <div
      className="video"
      style={{
        paddingBottom: "56.25%" /* 16:9 */,
        backgroundColor: "white"

      }}
    >
      <iframe
        style={{
          position: "absolute",
          width: "100%",
          height: "90%",
        }}
        src={`https://www.youtube.com/embed/Im0EJ_Kil64?rel=0`}
        frameBorder="0"
      />
    </div>
  );
}

export default EmbedVideo
