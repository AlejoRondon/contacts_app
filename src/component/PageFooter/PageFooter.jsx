import { Link } from 'react-router-dom'
import './PageFooter.scss'

function PageFooter() {
  return (
    <footer className='PageFooter'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Overview Footer</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default PageFooter
