import styled from 'styled-components'

export const Click = styled.div`
  color:red;
  font-size:20px;
`
export const Click2 = styled.div`
  color:${props => props.color? "blue" : "red"};;
  font-size:20px;
`