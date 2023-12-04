import React, { useState, useCallback, useEffect } from 'react'
import DropzoneStyle from './DropzoneStyle'
import { Image } from 'cloudinary-react'
import { useDropzone } from 'react-dropzone'
import { addImageToCart } from './utils'

const ImageUpload = ({ cancel, customVariantId }) => {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)
  const [noImage, setNoImage] = useState(false)

  const CLOUDINARY_UPLOAD_PRESET = 'jt3ld2no'
  const CLOUDINARY_CLOUD_NAME = 'dkxssdk96'

  const uploadImage = async () => {
    setLoading(true)
    if (!image) {
      setLoading(false)
      setNoImage(true)
      setTimeout(() => {
        setNoImage(false)
      }, 3000)
      return
    }
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    data.append('cloud_name', CLOUDINARY_CLOUD_NAME)
    data.append('folder', 'Cloudinary-React')

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
        method: 'POST',
        body: data,
      })
      const res = await response.json()
      console.log(res)
      setUrl(res.public_id)
      setLoading(false)
      if (customVariantId) addImageToCart(res.url, customVariantId)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleResetClick = () => {
    setPreview(null)
    setImage(null)
    cancel()
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
    <>
      <div className='bg-bg-primary pb-8 w-full absolute top-52 '>
        {!url && (
          <div>
            <h2 className='text-txt-primary text-center text-2xl my-6 font-semibold'>Upload an image</h2>
            <div {...getRootProps()}>
              <DropzoneStyle isDragActive={isDragActive}>
                <input {...getInputProps()} />
              </DropzoneStyle>
            </div>
            <div className='flex justify-center items-center mt-5 mb-5 mx-auto max-w-xs w-full '>
              {preview && <img src={preview} alt='preview' className='w-full' />}
            </div>
            <div className='flex gap-4 justify-center'>
              <button className='bg-white text-black px-4 py-2 ' onClick={uploadImage}>
                Confirm Image
              </button>
              <button className='bg-btn-bg border border-border text-txt-primary px-4 py-2 ' onClick={handleResetClick}>
                Cancel
              </button>
            </div>
          </div>
        )}
        {noImage && <p className='text-txt-primary text-center'>Please select an image</p>}
        {loading ? (
          <div className='flex items-center justify-center gap-2'>
            <div className='border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6'></div>
            <span className='text-txt-primary'>Processing...</span>
          </div>
        ) : (
          url && (
            <div className='pb-8 pt-4 m-auto w-full'>
              <Image cloudName={CLOUDINARY_CLOUD_NAME} publicId={url} />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default ImageUpload
