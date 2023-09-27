import React from 'react'
import { Loader } from './Loader';
export const ApiErrorLoader = ({error, isLoading , children }) => {
    if (error) return <span>Oh no, there was an error</span>;
    if (isLoading) return <Loader />;

  return (
    <div>
        {children}
    </div>
  )
}
