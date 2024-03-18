import './CardsContainer.scss'
import React from 'react'
function CardsContainer({ children }) {
  return (
    <section className='CardsContainer'>
      {React.Children.map(children, child => (
        <>{child}</>
      ))}
    </section>
  )
}

export default CardsContainer
