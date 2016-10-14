import React from 'react'
import {render} from 'react-dom'
import {
  Plus, Add, Traingle, Clock
} from 'reicons'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    node: <Plus size={32} color={color} thickness={2} rotate={45} />,
    code: '<Plus size={32} color={color} thickness={2} rotate={45} />',
  },
  {
    node: <Add size={40} color={color} thickness={3} dash={[8, 4]} />,
    code: '<Add size={40} color={color} thickness={3} dash={[8, 4]} />',
  },
  {
    node: <Traingle color={color} size={40} thickness={2} />,
    code: '<Traingle color={color} size={40} thickness={2} />',
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
