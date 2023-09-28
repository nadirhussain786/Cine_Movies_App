import React from 'react'
import { Loader } from './Loader';
export const ApiErrorLoader = ({error, isLoading , children }) => {
    

  return (
    <div>
      <div className='w-12 h-12 flex justify-content-center'>
        {error ? <span>Oh no, there was an error</span> : null}
        {isLoading ? <Loader /> : null}
      </div>
        {children}
    </div>
  )
}
