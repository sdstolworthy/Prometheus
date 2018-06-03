import React from 'react'

export default function Icon ({ children, size }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      style={{
        fill: 'currentcolor',
        verticalAlign: 'middle',
        width: size,
        height: size,
      }}
    >
      {children}
    </svg>
  )
}