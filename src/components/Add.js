import React from 'react'
import './Add.css'

const Add = ({size, color, thickness, dash}) => {
  const barHeight = size / 3
  const borderRadius = thickness / 2
  const dasharray = dash instanceof Array ? dash.join() : dash
  const barProps = {
    className: 'Add-plus',
    x: (size - thickness) / 2,
    y: (size - barHeight) / 2,
    rx: borderRadius,
    ry: borderRadius,
    fill: color,
    strokeWidth: 0,
    width: thickness,
    height: barHeight,
  }

  return (
    <svg className="Add" width={size} height={size}>
      <circle
        fill="none"
        className="Add-border"
        strokeDasharray={dasharray}
        cx={size / 2}
        cy={size / 2}
        r={(size - thickness / 2) / 2}
        strokeWidth={thickness / 2}
        stroke={color}
      />
      <g>
        <rect className="Add-plus" {...barProps} />
        <rect className="Add-plus" {...barProps} />
      </g>
    </svg>
  )
}

export default Add
