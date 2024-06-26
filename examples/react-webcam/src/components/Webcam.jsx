import ReactWebcam from "react-webcam"

const aspectRatios = {
  landscape: {
    width: 1920,
    height: 1080,
  },
  portrait: {
    height: 1920,
    width: 1080,
  },
}

export default function Webcam({ setCapturedImage, type = "landscape" }) {
  return (
    <div className="webcam">
      <ReactWebcam
        mirrored
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          facingMode: "user",
          ...aspectRatios[type],
        }}
      >
        {({ getScreenshot }) => (
          <button
            className="capture-btn"
            onClick={() => {
              const imageSrc = getScreenshot()
              setCapturedImage(imageSrc)
            }}
          >
            Capture photo
          </button>
        )}
      </ReactWebcam>
    </div>
  )
}
