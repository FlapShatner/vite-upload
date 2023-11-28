import React, { useState, useCallback } from 'react'
import DropzoneStyle from './DropzoneStyle'
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
    <div className='bg-bg-secondary pb-8 w-full '>
      {!url && (
        <div>
          <div {...getRootProps()}>
            <DropzoneStyle isDragActive={isDragActive}>
              <input {...getInputProps()} />
            </DropzoneStyle>
          </div>
          <div className='flex justify-center items-center mt-5 mb-5 mx-auto max-w-xs w-full '>
            {preview && <img src={preview} alt='preview' className='w-full' />}
          </div>
          <div className='flex gap-4 justify-center'>
            <button className='bg-white text-black p-4 ' onClick={uploadImage}>
              Confirm Image
            </button>
            <button className='bg-btn-bg border border-border text-txt-primary p-4 ' onClick={handleResetClick}>
              Reset
            </button>
          </div>
        </div>
      )}
      {loading ? (
        <div className='flex items-center justify-center gap-2'>
          <div className='border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6'></div>
          <span>Processing...</span>
        </div>
      ) : (
        url && (
          <div className='pb-8 pt-4 m-auto w-full'>
            <Image cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME} publicId={url} />
          </div>
        )
      )}
    </div>
  )
}

export default ImageUpload
