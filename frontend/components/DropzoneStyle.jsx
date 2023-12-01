import React from 'react'
import CloudIcon from './CloudIcon'

function DropzoneStyle({ children, isDragActive }) {
  return (
    <div className=' font-sans text-txt-primary bg-bg-primary border-box '>
      <div className='flex justify-center w-full mx-auto '>
        <div className='flex flex-col items-center justify-center w-full h-auto mb-6 bg-white sm:w-3/4   '>
          <form className='border border-dashed border-bg-secondary relative w-4/5 h-48  mt-8 mb-6 bg-img-bg rounded-lg shadow-inner'>
            {children}
            <label htmlFor='file-upload' className='z-20 flex flex-col items-center justify-center w-full h-full cursor-pointer'>
              {!isDragActive && <p className='z-10 text-sm font-light text-center text-bg-secondary'>Drag 'n' drop an image file here</p>}

              <CloudIcon size={50} className='z-10 text-bg-primary' />
              <p className='z-10 text-sm font-light text-center text-bg-secondary'>{isDragActive ? 'Drop the files here ...' : 'or click to select image'}</p>
            </label>
          </form>
          <div className=' mb-6 text-center'>
            <p className='text-xs text-bg-primary'></p>
            <p className='text-xs text-bg-primary'>File must be .jpg, .png, .svg, .bmp, .tiff, or .webp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropzoneStyle
