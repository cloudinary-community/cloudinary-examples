import { useEffect, useState } from "react"
import "./App.css"
import Webcam from "./components/Webcam"
import CldImage from "./components/CldImage"
import UploadImage from "./components/UploadImage"

function App() {
  const [capturedImage, setCapturedImage] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (screen.orientation.type === "portrait-primary") {
      setIsMobile(true)
    }
  }, [])

  return (
    <div>
      <div className={`container`}>
        {!capturedImage && (
          <Webcam
            type={isMobile ? "portrait" : "landscape"}
            setCapturedImage={setCapturedImage}
          />
        )}
        {capturedImage && !uploadedImage && (
          <UploadImage
            onUpload={setUploadedImage}
            capturedImage={capturedImage}
            setCapturedImage={setCapturedImage}
          />
        )}
        {uploadedImage && (
          <>
            <span className="uploaded-text">Uploaded to Cloudinary</span>
            <button
              onClick={() => {
                setUploadedImage(null)
                setCapturedImage(null)
              }}
              className="retake-btn"
            >
              Retake
            </button>
            <CldImage public_id={uploadedImage.public_id} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
