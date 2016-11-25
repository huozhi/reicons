import React from 'react'

const Clock = ({color, size, thickness, minute, hour}) => {
  const needleProps = {
    height: size / 3, // 2/3 radius
    width: thickness * 1.5,
    fill: color,
    stroke: 0,
    x: size / 2 - thickness / 2,
    y: size / 2 - thickness / 2,
    rx: thickness * 1.5 / 2,
    ry: thickness * 1.5 / 2,
  }

  return (
    <svg width={size} height={size}>
      <circle
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        cx={(size) / 2}
        cy={(size) / 2}
        r={size / 2 - thickness}
      />
      <rect
        className="Clock-minute"
        transform={`rotate(${(minute / 60) * 360 - 180}, ${size / 2}, ${size / 2})`}
        {...needleProps}
      />
      <rect
        className="Clock-hour"
        transform={`rotate(${(hour / 12) * 360 - 180}, ${size / 2}, ${size / 2})`}
        {...needleProps}
      />
    </svg>
  )
}

export default Clock
