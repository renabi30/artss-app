import * as React from 'react'
import Search from '../header/search'
import Clock from '../header/clock'

const Header = () => {
  return (
    <div className="flex justify-center top-0 border-b">
      <Search />
      <Clock />
    </div>
  )
}

export default Header

// top-0 h-full w-full border-b p-4
