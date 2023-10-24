import React from 'react'

const ErrorHandle = ( { errorMsg } ) => {

  return (
        <div className="error-msg">
            {errorMsg}
        </div>
  )
}

export default ErrorHandle