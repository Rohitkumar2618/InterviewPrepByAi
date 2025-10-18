import React, { ReactNode } from 'react'

const Authayout = ( { children }:{ children: ReactNode } ) => {
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default Authayout
