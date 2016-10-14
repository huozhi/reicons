import React from 'react'

const Traingle = ({size, color, rotate, thickness}) => {
  const height = (size / 2) / Math.tan(30 / 180 * Math.PI)
  const vertiMove = (size - height + thickness) / 2
  const points = [
    [thickness,        thickness + vertiMove],
    [size - thickness, thickness + vertiMove],
    [size / 2,         height - thickness + vertiMove]
  ].map(point => point.join())

  return (
    <svg className="Traingle" width={size} height={size}>
      <polygon
        strokeWidth={thickness}
        stroke={color}
        strokeLinejoin="round"
        fill="none"
        points={points.join(' ')}
      />
    </svg>
  )
}

export default Traingle
