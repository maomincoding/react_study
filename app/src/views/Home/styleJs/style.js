import styled from 'styled-components';

export const Click = styled.p `
  color:red;
  font-size:20px;
`;
export const Click2 = styled.p `
  color:${props => props.color ? "blue" : "red"};
  font-size:20px;
`;
export const Divtransition = styled.p `
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
`;