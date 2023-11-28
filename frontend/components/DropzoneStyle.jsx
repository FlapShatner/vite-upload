import React from 'react'

function DropzoneStyle({ children, isDragActive }) {
  return (
    <div className=' font-sans text-txt-primary bg-bg-secondary border-box '>
      <div className='flex justify-center w-full mx-auto '>
        <div className='flex flex-col items-center justify-center w-full h-auto mt-10 mb-6 bg-white sm:w-3/4  sm:shadow-xl  '>
          <div className='mt-6 mb-6 text-center'>
            <h2 className='text-bg-secondary text-2xl font-semibold mb-2'>Upload an image</h2>
            <p className='text-xs text-bg-primary'>File must be</p>
            <p className='text-xs text-bg-primary'>.jpg, .png, .svg, .bmp, .tiff, or .webp</p>
          </div>

          <form className='border border-dashed border-bg-secondary relative w-4/5 h-32 max-w-xs mb-8 bg-img-bg rounded-lg shadow-inner'>
            {children}
            <label for='file-upload' className='z-20 flex flex-col items-center justify-center w-full h-full cursor-pointer'>
              {!isDragActive && <p className='z-10 text-sm font-light text-center text-bg-secondary'>Drag 'n' drop an image file here</p>}

              <svg className='z-10 w-8 h-8 text-bg-secondary' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'></path>
              </svg>
              <p className='z-10 text-sm font-light text-center text-bg-secondary'>
                {isDragActive ? <p>Drop the files here ...</p> : <p> or click to select image</p>}
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DropzoneStyle
