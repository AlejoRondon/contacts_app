import { Link } from 'react-router-dom'
function TopHeader() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Overview</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TopHeader
