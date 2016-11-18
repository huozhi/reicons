import React from 'react'
import {render} from 'react-dom'
import {
  Cross, Add, Triangle, Clock
} from 'reicons'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    node: <Cross size={32} color={color} strokeWidth={3} rotate={0} />,
    code: '<Cross size={32} color={color} strokeWidth={3} rotate={0} />',
  },
  {
    node: <Add size={40} color={color} thickness={3} dash={[8, 4]} />,
    code: '<Add size={40} color={color} thickness={3} dash={[8, 4]} />',
  },
  {
    node: <Triangle color={color} size={40} thickness={2} />,
    code: '<Triangle color={color} size={40} thickness={2} />',
  },
  {
    node: <Clock size={40} hour={2} minute={45} color={color} thickness={2} />,
    code: '<Clock size={40} hour={2} minute={45} color={color} thickness={2} />',
  },
]

const user = 'huozhi'
const repo = 'reicons'
const title = 'React SVG Icons'

const App = () => (
  <div className="App">
    <div className="App-title">
      <h1>{title}</h1>
    </div>
    <div className="App-container">
      {loaders.map(({node, code}, idx) => (
        <div key={`loader-${idx}`} className="App-demo">
          <div className="App-loader">{node}</div>
          <div className="App-code">{code}</div>
        </div>
      ))}
    </div>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
