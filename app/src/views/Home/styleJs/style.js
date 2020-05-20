import styled from 'styled-components'

export const Click = styled.div `
  color:red;
  font-size:20px;
`
export const Border = styled.div `
  border:1px solid #1890ff;
  margin:10px;
  padding:10px;
`
export const Click2 = styled.div `
  color:${props => props.color ? "blue" : "red"};
  font-size:20px;
`
export const Divtransition = styled.div `
  font-size:26px;
    .fade-enter {
      opacity: 0;
      transform: translate(0,200px);
    }
    .fade-enter-active {
      opacity: 1;
      transition: all .6s;
      transform: translate(0,0);
    }
    .fade-exit {
      opacity: 1;
      transition: all .6s;
      transform: translate(0,0);
    }
    .fade-exit-active {
      opacity: 0;
      transform: translate(0,200px);
    }
`