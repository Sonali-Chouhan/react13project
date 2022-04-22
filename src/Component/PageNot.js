import React from 'react'
import { Link } from 'react-router-dom'

const PageNot = () => {
  return (
    <div>
   <center>
       <h1 className='error'>404-Error</h1>
       <h3 className='error'> Page Not Found</h3>
       <Link to="/">Back to Home</Link>
   </center>


    </div>
  )
}

export default PageNot