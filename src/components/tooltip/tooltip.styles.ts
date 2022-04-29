import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 245px;
  height: 149px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > span {
    width: 84px;
    border: 1px solid #ffffff;
  }

  > p {
    font-family: 'Inter';
    font-style: 400;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
`;
