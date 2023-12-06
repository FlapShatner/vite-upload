import React, { useState, useCallback, useEffect } from 'react'
import DropzoneStyle from './DropzoneStyle'
import { useDropzone } from 'react-dropzone'

const ImageUpload = ({ setUserImage }) => {
  // const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  // const CLOUDINARY_UPLOAD_PRESET = 'jt3ld2no'
  // const CLOUDINARY_CLOUD_NAME = 'dkxssdk96'

  // const uploadImage = async () => {
  //   setLoading(true)
  //   const data = new FormData()
  //   data.append('file', image)
  //   data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //   data.append('cloud_name', CLOUDINARY_CLOUD_NAME)
  //   data.append('folder', 'Cloudinary-React')
  //   try {
  //     const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
  //       method: 'POST',
  //       body: data,
  //     })
  //     const res = await response.json()
  //     //   console.log(res)
  //     setLoading(false)
  //     setSelectedImage(res.url)
  //     setPreview(null)
  //   } catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  // }

  const handleResetClick = () => {
    setPreview(null)
    setUserImage(null)
  }

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0]
    setUserImage(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreview(reader.result)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='bg-bg-primary pb-8 w-full sm:w-1/2  '>
      {preview ? (
        <div className='flex justify-center items-center mt-12 mb-5 mx-auto md:max-w-md w-full '>
          <img src={preview} alt='preview' className='w-full' />{' '}
        </div>
      ) : (
        <>
          <h2 className='text-txt-primary text-center text-2xl my-6 font-semibold'>Upload an image</h2>
          <div {...getRootProps()}>
            <DropzoneStyle isDragActive={isDragActive}>
              <input {...getInputProps()} />
            </DropzoneStyle>
          </div>
        </>
      )}

      <div className='flex gap-4 justify-center'>
        <button className='bg-bg-secondary border border-border text-txt-primary px-4 py-2 ' onClick={handleResetClick}>
          Reset
        </button>
      </div>
      {/* {loading && (
        <div className='flex items-center justify-center gap-2'>
          <div className='border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6'></div>
          <span className='text-txt-primary'>Processing...</span>
        </div>
      )} */}
    </div>
  )
}

export default ImageUpload
