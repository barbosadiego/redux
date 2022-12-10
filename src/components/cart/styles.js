import styled from 'styled-components';

export const StyledCart = styled.div`
  text-align: center;
  margin-top: 10vh;
`;

export const Button = styled.button`
  margin: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #fff;
  padding: 23px 50px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  border: 0px;
  cursor: pointer;
  background-color: ${({ bgColor }) =>
    bgColor === 'red' ? 'rgb(221, 52, 66)' : 'rgb(6, 172, 0)'};

  &:disabled {
    background-color: rgb(193, 191, 191);
    cursor: not-allowed;
  }
`;
