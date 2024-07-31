import { useState } from "react"
import { upload } from "../helpers/upload"

export default function UploadImage({
  capturedImage,
  onUpload,
  setCapturedImage,
}) {
  const [uploading, setUploading] = useState(false)

  const uploadImage = async () => {
    setUploading(true)
    await upload(capturedImage, onUpload)
    setUploading(false)
  }

  return (
    <div className={`${!capturedImage && "no-capture"} preview`}>
      <img src={capturedImage} />
      <div className="actions">
        <button
          onClick={uploadImage}
          className="upload-btn"
          disabled={uploading}
        >
          Upload
        </button>
        <button onClick={() => setCapturedImage(null)} className="retake-btn">
          Retake
        </button>
      </div>
      {uploading && <span className="uploading-text">Uploading...</span>}
    </div>
  )
}
