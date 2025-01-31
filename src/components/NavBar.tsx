import React from 'react'

interface Props{
    cartItemCount: number;
}

const NavBar = ({cartItemCount}: Props) => {
  return (
    <div>NavBar: {cartItemCount}</div>
  )
}

export default NavBar