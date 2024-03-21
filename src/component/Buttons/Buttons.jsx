import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: ${props => props.$font_size || '1rem'};
  padding: 0.5em 0.6em;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  background: ${props => props.$background_color || 'white'};
  border-color: ${props => props.$background_color || 'black'};
  color: ${props => (props.$font_color ? '#BF4F74' : 'black')};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
export const RedButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`

export const GreenButton = styled(StyledButton)`
  color: #c1d72f;
  border-color: #c1d72f;
`
export default StyledButton
