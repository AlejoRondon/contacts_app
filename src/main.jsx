import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

Array.prototype.shuffle = function () {
  const arrayCopy = [...this] // Create a shallow copy of the original array
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]] // Swap elements
  }
  return arrayCopy
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
