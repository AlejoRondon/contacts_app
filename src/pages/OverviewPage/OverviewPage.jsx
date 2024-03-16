import './OverviewPage.scss'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

// Use Title and Wrapper like any other React component – except they're styled!
// render(
//   <Wrapper>
//     <Title>Hello World!</Title>
//   </Wrapper>
// )

function OverviewPage() {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  )
}

export default OverviewPage
