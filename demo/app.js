import React from 'react'
import {render} from 'react-dom'
import {
  Cross, Add, Triangle, Clock
} from 'reicons'
import Playground from 'component-playground'
import './app.css'

const color = '#4197ff'

const loaders = [
  {
    code: `<Cross length={40} size={40} color="#4197ff" strokeWidth={3} rotate={0} />`,
    component: {Cross},
  },
  {
    code: `<Add size={40} color="#4197ff" thickness={3} dash={[8, 4]} />`,
    component: {Add},
  },
  {
    code: `<Triangle color="#4197ff" size={40} thickness={2} />`,
    component: {Triangle} ,
  },
  {
    code: `<Clock size={40} hour={2} minute={45} color="#4197ff" thickness={2} />`,
    component: {Clock},
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
      {loaders.map(({code, component}, idx) => (
        <div key={idx} className="App-demo">
          <Playground
            theme="paraiso-dark"
            codeText={code}
            scope={{
              React,
              color,
              ...component,
            }}
          />
        </div>
      ))}
    </div>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
