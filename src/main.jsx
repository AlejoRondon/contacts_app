import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux' // Import the Provider
import { store } from './redux-TK/store.js' // Import your Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

Array.prototype.shuffle = function () {
  const arrayCopy = [...this] // Create a shallow copy of the original array
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]] // Swap elements
  }
  return arrayCopy
}
