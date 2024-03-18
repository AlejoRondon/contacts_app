import './HeadingSection.scss'

function HeadingSection({ children }) {
  return (
    <div className='HeadingSection'>
      <h1>{children}</h1>
      <hr></hr>
    </div>
  )
}

export default HeadingSection
