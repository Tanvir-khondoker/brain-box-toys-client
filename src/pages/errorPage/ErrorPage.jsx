import { Link, useRouteError } from 'react-router-dom'
import photo from "../../../public/assets/errorPage/404 Error-rafiki.svg"

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-gray-600">
  <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
  <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
  <path fill="currentColor" d="M324.498,193.02c-8.34-12.411-21.514-19.375-35.497-19.375c-14.235,0-27.84,6.725-36.564,18.281c-6.826-10.32-18.348-17.031-31.437-17.031c-14.14,0-26.771,7.928-33.125,20.312c-11.152-3.89-23.239-1.916-32.036,5.88c-11.156,9.504-13.685,26.306-5.162,37.457c-3.89,11.152-1.916,23.239,5.88,32.036c9.737,10.183,25.454,12.44,37.686,4.19c11.107,23.644,34.437,38.939,61.055,38.939c23.716,0,45.718-12.246,57.531-32.119c14.15,3.889,29.491,1.916,40.689-5.88c11.152-7.915,14.039-22.856,6.127-34.01c3.888-11.152,1.916-23.24-5.88-32.036c-6.961-7.292-17.096-10.984-27.418-9.062c-5.334-14.428-19.379-23.968-34.625-23.968c-2.583,0-5.135,0.26-7.646,0.78C339.193,217.419,332.456,203.432,324.498,193.02z">
    <animate attributeName="fill" values="#ff0000; #00ff00; #0000ff; #ff0000" dur="3s" repeatCount="indefinite"></animate>
  </path>
</svg>

        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3  btn-accent'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
