import styled from 'styled-components'

export default styled.button`
  font-size: 1em;
  border-radius: 0;
  padding: 0.5em;

  & + & {
    margin-left: 1em;
  }
`
