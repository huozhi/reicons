import React from 'react'

const Cross = ({size, color, rotate, ...rest}) => {
  const barHeight = size * Math.sqrt(2)

  const barProps = {
    stroke: color,
  }

  return (
    <svg
      {...rest}
      className="Cross"
      width={size}
      height={size}
    >
      <g transform={`rotate(${rotate}, ${size / 2}, ${size / 2})`}>
        <line
          x1={0}
          y1={0}
          x2={size}
          y2={size}
          className="Cross-line"
          {...barProps}
        />
        <line
          x1={size}
          y1={0}
          x2={0}
          y2={size}
          className="Cross-line"
          {...barProps}
        />
      </g>
    </svg>
  )
}

export default Cross
