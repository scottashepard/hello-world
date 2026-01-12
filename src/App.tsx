import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <section className="ios-card" aria-label="Hello World counter">
        <header className="ios-header">
          <span className="ios-kicker">Counter</span>
          <h1>Hello World - SAS</h1>
        </header>
        <div className="ios-count" aria-live="polite">
          {count}
        </div>
        <div className="ios-actions">
          <button
            className="ios-button ios-button-ghost"
            onClick={() => setCount((value) => value - 1)}
            aria-label="Decrease count"
          >
            -
          </button>
          <button
            className="ios-button"
            onClick={() => setCount((value) => value + 1)}
            aria-label="Increase count"
          >
            +
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
