import React from 'react'

const Cross = ({size, length, color, rotate, ...rest}) => {
  const barProps = {stroke: color}
  const diagonal = size * Math.sqrt(2)
  const difference = (diagonal - length - rest.strokeWidth) / 2

  return (
    <svg
      {...rest}
      width={size}
      height={size}
      className="Cross"
    >
      <g transform={`rotate(${rotate}, ${size / 2}, ${size / 2})`}>
        <line
          x1={difference}
          y1={difference}
          x2={size - difference}
          y2={size - difference}
          className="Cross-line"
          {...barProps}
        />
        <line
          x1={difference}
          y1={size - difference}
          x2={size - difference}
          y2={difference}
          className="Cross-line"
          {...barProps}
        />
      </g>
    </svg>
  )
}

Cross.defaultProps = {
  strokeWidth: 0,
}

export default Cross
