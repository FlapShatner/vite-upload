import Form from './Form'
import ImageUpload from './Dropzone'

export default function App({ home }) {
 console.log('Home', home)

 return (
  <div className='w-full bg-bg-primary flex'>
   <ImageUpload />
   <Form />
  </div>
 )
}
