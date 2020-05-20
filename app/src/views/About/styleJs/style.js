import styled from 'styled-components'

export const Border = styled.div`
  border:1px solid #1890ff;
  margin:10px;
  padding:10px;
`

const TxtOne = styled.div`
  font-size:25px;
`
export const TxtTwo = styled(TxtOne)`
  color:red;
`