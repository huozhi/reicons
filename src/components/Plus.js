import React from 'react'
import './Plus.css'

const Plus = ({size, color, thickness, rotate}) => {
  const borderRadius = thickness / 2
  const barHeight = size * Math.sqrt(2)
  const centerProps = {
    x: size / 2 - thickness / 2,
    y: size / 2 - barHeight / 2,
  }

  const barProps = {
    rx: borderRadius,
    ry: borderRadius,
    fill: color,
    strokeWidth: 0,
    width: thickness,
    height: barHeight,
    ...centerProps,
  }

  return (
    <svg className="Plus" width={size} height={size}>
      <g className="Plus-cross" transform={`rotate(${rotate}, ${size / 2}, ${size / 2})`}>
        <rect className="Plus-line" {...barProps} />
        <rect className="Plus-line" {...barProps} />
      </g>
    </svg>
  )
}

export default Plus
