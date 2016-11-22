import React from 'react'

const Add = ({size, color, thickness, dash}) => {
  const halfWidth = size / 2
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
      <style type="text/css" dangerouslySetInnerHTML={{__html: `
        .Add-plus {
          transform-origin: center;
        }
      `}} />
      <circle
        fill="none"
        className="Add-border"
        strokeDasharray={dasharray}
        cx={halfWidth}
        cy={halfWidth}
        r={(size - thickness / 2) / 2}
        strokeWidth={thickness / 2}
        stroke={color}
      />
      <g>
        <rect transform={`rotate(90, ${halfWidth}, ${halfWidth})`} className="Add-plus" {...barProps} />
        <rect className="Add-plus" {...barProps} />
      </g>
    </svg>
  )
}

export default Add
