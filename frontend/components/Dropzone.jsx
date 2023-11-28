import React, { useState, useCallback } from 'react'
import DZStyle from './DZStyle'
import { Image } from 'cloudinary-react'
import { useDropzone } from 'react-dropzone'

const ImageUpload = () => {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)

  const uploadImage = async () => {
    setLoading(true)
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    data.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
    data.append('folder', 'Cloudinary-React')

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`, {
        method: 'POST',
        body: data,
      })
      const res = await response.json()
      setUrl(res.public_id)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleResetClick = () => {
    setPreview(null)
    setImage(null)
  }

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0]
    setImage(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      setPreview(reader.result)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      <div {...getRootProps()}>
        <DZStyle isDragActive={isDragActive}>
          <input {...getInputProps()} />
        </DZStyle>
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      <div className='flex justify-center items-center mt-5 mx-3 max-w-xs'>{preview && <img src={preview} alt='preview' className='w-full' />}</div>
      <button onClick={uploadImage}>Confirm Image</button>
      <button onClick={handleResetClick}>Reset</button>
      {loading ? (
        <div className='flex items-center justify-center gap-2'>
          <div className='border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6'></div>
          <span>Processing...</span>
        </div>
      ) : (
        url && (
          <div className='pb-8 pt-4'>
            <Image cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME} publicId={url} />
          </div>
        )
      )}
    </div>
  )
}

export default ImageUpload
